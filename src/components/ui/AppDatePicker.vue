<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  min: { type: String, default: '' },
  max: { type: String, default: '' },
  id: { type: String, default: undefined },
  label: { type: String, default: 'Date' },
  placeholder: { type: String, default: 'Select date' },
  disabled: Boolean,
  required: Boolean,
})
const emit = defineEmits(['update:modelValue'])
const uid = useId()
const calendarId = `calendar-${uid}`
const root = ref(null)
const trigger = ref(null)
const open = ref(false)
const month = ref(new Date())
const focused = ref('')
const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
function parse(value) { const [y, m, d] = value.split('-').map(Number); return new Date(y, m - 1, d) }
function iso(date) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}` }
const today = iso(new Date())
const title = computed(() => month.value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }))
const display = computed(() => props.modelValue ? parse(props.modelValue).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '')
const days = computed(() => {
  const first = new Date(month.value.getFullYear(), month.value.getMonth(), 1)
  const offset = (first.getDay() + 6) % 7
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(first.getFullYear(), first.getMonth(), index - offset + 1)
    return { value: iso(date), day: date.getDate(), outside: date.getMonth() !== first.getMonth(), label: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) }
  })
})
function unavailable(value) { return Boolean((props.min && value < props.min) || (props.max && value > props.max)) }
function focusDay() { nextTick(() => root.value?.querySelector(`[data-date="${focused.value}"]`)?.focus()) }
function show() {
  let value = props.modelValue || today
  if (props.min && value < props.min) value = props.min
  if (props.max && value > props.max) value = props.max
  focused.value = value
  month.value = parse(value)
  open.value = true
  focusDay()
}
function close() { open.value = false; trigger.value?.focus() }
function select(value) { if (unavailable(value)) return; emit('update:modelValue', value); close() }
function moveMonth(delta) {
  const target = new Date(month.value.getFullYear(), month.value.getMonth() + delta, 1)
  month.value = target
  focused.value = days.value.find(day => !day.outside && !unavailable(day.value))?.value || ''
}
function keydown(event) {
  if (event.key === 'Escape') { event.preventDefault(); close(); return }
  const offsets = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }
  if (!(event.key in offsets) || !event.target.dataset.date) return
  event.preventDefault()
  const date = parse(event.target.dataset.date)
  date.setDate(date.getDate() + offsets[event.key])
  const value = iso(date)
  if (unavailable(value)) return
  focused.value = value
  month.value = date
  focusDay()
}
function outside(event) { if (!root.value?.contains(event.target)) open.value = false }
onMounted(() => document.addEventListener('pointerdown', outside))
onBeforeUnmount(() => document.removeEventListener('pointerdown', outside))
</script>

<template>
  <div ref="root" class="app-field" @keydown="keydown" @focusout="event => { if (!root.contains(event.relatedTarget)) open = false }">
    <label :for="id || calendarId + '-trigger'" class="app-field__label">{{ label }}</label>
    <button :id="id || calendarId + '-trigger'" ref="trigger" class="app-field__trigger" type="button" aria-haspopup="dialog" :aria-expanded="open" :aria-controls="calendarId" :aria-required="required" :disabled="disabled" @click="open ? close() : show()">
      <span class="app-date__value"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="4" y="5" width="16" height="16" rx="1"/><path d="M8 2v6m8-6v6M4 11h16"/></svg><span :class="{ 'app-field__placeholder': !display }">{{ display || placeholder }}</span></span>
      <svg class="app-field__chevron" :class="{ 'is-open': open }" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true"><path d="m6 8 4 4 4-4"/></svg>
    </button>
    <div v-if="open" :id="calendarId" class="app-field__popover app-calendar" role="dialog" :aria-label="label + ' calendar'" lang="en">
      <div class="app-calendar__header">
        <button type="button" aria-label="Previous month" @click="moveMonth(-1)">‹</button>
        <span aria-live="polite">{{ title }}</span>
        <button type="button" aria-label="Next month" @click="moveMonth(1)">›</button>
      </div>
      <div class="app-calendar__grid">
        <span v-for="day in weekdays" :key="day" class="app-calendar__weekday">{{ day }}</span>
        <button v-for="day in days" :key="day.value" type="button" :data-date="day.value" :aria-label="day.label" :aria-pressed="day.value === modelValue" :aria-current="day.value === today ? 'date' : undefined" :tabindex="day.value === focused ? 0 : -1" :disabled="unavailable(day.value)" :class="{ 'is-outside': day.outside, 'is-selected': day.value === modelValue }" @focus="focused = day.value" @click="select(day.value)">{{ day.day }}</button>
      </div>
      <div class="app-calendar__footer"><button type="button" @click="emit('update:modelValue', ''); close()">Clear</button><button type="button" :disabled="unavailable(today)" @click="select(today)">Today</button></div>
    </div>
  </div>
</template>

<style scoped>
.app-date__value { display: flex; align-items: center; gap: 14px; min-width: 0; }
.app-date__value svg { width: 18px; height: 18px; flex-shrink: 0; }
.app-calendar { padding: 12px; }
.app-calendar button { display: grid; place-items: center; padding: 0; border: 0; background: transparent; color: inherit; font: inherit; cursor: pointer; }
.app-calendar button:disabled { opacity: 0.25; cursor: default; }
.app-calendar button:hover:not(:disabled) { background: var(--field-hover); }
.app-calendar__header { display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 13px; }
.app-calendar__header button { width: 32px; height: 32px; font-size: 24px; }
.app-calendar__grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 3px; }
.app-calendar__weekday { text-align: center; padding: 8px 0; color: var(--color-muted-dark); font-size: 10px; }
.app-calendar__grid button { width: 100%; aspect-ratio: 1; font-size: 12px; border: 1px solid transparent; }
.app-calendar__grid button.is-outside { color: var(--color-muted-dark); }
.app-calendar__grid button[aria-current="date"] { border-color: var(--color-border-dark); }
.app-calendar__grid button.is-selected { background: var(--color-primary); color: var(--color-on-primary); }
.app-calendar__footer { display: flex; justify-content: space-between; border-top: 1px solid var(--color-border-dark); margin-top: 12px; padding-top: 8px; }
.app-calendar__footer button { padding: 8px; font-size: 11px; }
</style>
