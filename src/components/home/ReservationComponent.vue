<script setup>
import { computed, ref, watch } from 'vue'
import AppButton from '../ui/AppButton.vue'
import AppDatePicker from '../ui/AppDatePicker.vue'
import AppSelect from '../ui/AppSelect.vue'
import image from '@/assets/images/reservation/image-1.png'

const date = ref('')
const time = ref('')
const guests = ref('2')
const submitted = ref(false)
const error = ref('')
const guestOptions = Array.from({ length: 8 }, (_, index) => ({ value: String(index + 1), label: `${index + 1} ${index === 0 ? 'guest' : 'guests'}` }))
const today = new Date()
const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
const times = ['12:00', '12:30', '13:00', '13:30', '14:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']
watch([date, time, guests], () => { submitted.value = false; error.value = '' })
const summary = computed(() => `${date.value} at ${time.value}, ${guests.value} guests`)
function submit() {
  error.value = ''
  if (!date.value || date.value < minDate || !time.value) {
    error.value = 'Please select a valid date and time.'
    return
  }
  submitted.value = true
}
</script>

<template>
  <section class="section section--dark reservation-component">
    <div class="container reservation-container">
      <div class="reservation-content">
        <p class="section-label">RESERVATION</p>
        <h2 class="section-title">A Table<br>Awaits You</h2>
        <p class="section-description">Whether it’s a special occasion or a spontaneous evening, we would be honored to welcome you.</p>
      </div>
      <form class="reservation-form" @submit.prevent="submit" @input="submitted = false" @change="submitted = false">
        <AppDatePicker id="reservation-date" v-model="date" label="DATE" :min="minDate" required />
        <AppSelect id="reservation-time" v-model="time" label="TIME" :options="times" placeholder="Select time" required />
        <AppSelect id="reservation-guests" v-model="guests" label="GUESTS" :options="guestOptions" />
        <p v-if="error" class="reservation-message" role="alert">{{ error }}</p>
        <AppButton type="submit" variant="secondary" full-width>RESERVE A TABLE <span class="button-arrow" aria-hidden="true">⟶</span></AppButton>
        <p v-if="submitted" class="reservation-message" role="status">Your selection: {{ summary }}. This is a demo; no reservation has been sent.</p>
      </form>
      <img :src="image" class="reservation-image" alt="A candlelit table with wine at Velluto" loading="lazy">
    </div>
  </section>
</template>

<style scoped lang="scss">
.reservation-container { display: grid; grid-template-columns: 1.2fr 0.85fr 0.9fr; align-items: center; gap: 56px; }
.reservation-form { display: flex; flex-direction: column; min-width: 0; }
.reservation-form { gap: 22px; }
.reservation-form .app-button { margin-top: 6px; }
.reservation-image { width: 100%; height: 440px; object-fit: cover; }
.reservation-message { margin: 16px 0 0; color: var(--color-muted-dark); font-size: 12px; line-height: 1.7; }
@media (max-width: 1100px) { .reservation-container { grid-template-columns: 1fr 1fr; gap: 40px; } .reservation-content { grid-column: 1 / -1; } }
@media (max-width: 600px) { .reservation-container { grid-template-columns: 1fr; } .reservation-content { grid-column: auto; } .reservation-image { height: 340px; } }
</style>
