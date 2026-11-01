<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  options: { type: Array, default: () => [] },
  id: { type: String, default: undefined },
  label: { type: String, required: true },
  placeholder: { type: String, default: 'Select an option' },
  disabled: Boolean,
  required: Boolean,
})
const emit = defineEmits(['update:modelValue'])
const uid = useId()
const listId = `select-${uid}`
const root = ref(null)
const trigger = ref(null)
const open = ref(false)
const active = ref(0)
const items = computed(() => props.options.map(option => typeof option === 'object' ? option : { value: option, label: String(option) }))
const selected = computed(() => items.value.find(option => option.value === props.modelValue))
function show() {
  if (props.disabled) return
  active.value = Math.max(0, items.value.findIndex(option => option.value === props.modelValue))
  open.value = true
  reveal()
}
function reveal() { nextTick(() => root.value?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' })) }
function choose(option) { emit('update:modelValue', option.value); open.value = false; trigger.value?.focus() }
function keydown(event) {
  if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' '].includes(event.key)) {
    event.preventDefault()
    if (!open.value) { show(); return }
    if (event.key === 'Enter' || event.key === ' ') { if (items.value[active.value]) choose(items.value[active.value]); return }
    if (event.key === 'Home') active.value = 0
    else if (event.key === 'End') active.value = items.value.length - 1
    else active.value = (active.value + (event.key === 'ArrowDown' ? 1 : -1) + items.value.length) % items.value.length
    reveal()
  }
  if (event.key === 'Escape' || event.key === 'Tab') open.value = false
}
function outside(event) { if (!root.value?.contains(event.target)) open.value = false }
onMounted(() => document.addEventListener('pointerdown', outside))
onBeforeUnmount(() => document.removeEventListener('pointerdown', outside))
</script>

<template>
  <div ref="root" class="app-field" @focusout="event => { if (!root.contains(event.relatedTarget)) open = false }">
    <label :for="id || listId + '-trigger'" class="app-field__label">{{ label }}</label>
    <button :id="id || listId + '-trigger'" ref="trigger" type="button" class="app-field__trigger" role="combobox" aria-haspopup="listbox" :aria-expanded="open" :aria-controls="listId" :aria-required="required" :aria-activedescendant="open && items.length ? listId + '-' + active : undefined" :disabled="disabled" @click="open ? open = false : show()" @keydown="keydown">
      <span :class="{ 'app-field__placeholder': !selected }">{{ selected?.label || placeholder }}</span>
      <svg class="app-field__chevron" :class="{ 'is-open': open }" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true"><path d="m6 8 4 4 4-4" /></svg>
    </button>
    <ul v-if="open" :id="listId" class="app-field__popover app-select__list" role="listbox" :aria-label="label">
      <li v-for="(option, index) in items" :id="listId + '-' + index" :key="option.value" role="option" :aria-selected="option.value === modelValue" :data-active="index === active" @pointermove="active = index" @mousedown.prevent @click="choose(option)">
        <span>{{ option.label }}</span><span v-if="option.value === modelValue" aria-hidden="true">✓</span>
      </li>
      <li v-if="!items.length" role="presentation">No options available</li>
    </ul>
  </div>
</template>

<style scoped>
.app-select__list { list-style: none; padding: 6px; margin: 0; max-height: 260px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--color-border-dark) transparent; }
.app-select__list li { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 13px 12px; cursor: pointer; font-size: 13px; }
.app-select__list li[data-active="true"] { background: var(--field-hover); }
.app-select__list li[aria-selected="true"] { color: var(--color-light); background: var(--field-hover); }
</style>
