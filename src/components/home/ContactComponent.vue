<script setup>
import AppIcon from '../ui/AppIcon.vue'
import decoration from '@/assets/images/contacts/image-1.png'
</script>

<template>
  <section class="section section--light contact-component">
    <div class="container contact-container">
      <div class="contact-details">
        <p class="section-label">CONTACT</p>
        <h2 class="section-title">Visit Us</h2>
        <address>
          <div class="contact-row"><AppIcon name="pin" /><div>Via della Luna 12, Florence, Italy<br><a href="#" @click.prevent class="map-link">View on map <span aria-hidden="true">⟶</span></a></div></div>
          <div class="contact-row"><AppIcon name="phone" /><a href="#" @click.prevent>+39 055 123 4567</a></div>
          <div class="contact-row"><AppIcon name="mail" /><a href="#" @click.prevent>hello@velluto.it</a></div>
        </address>
      </div>
      <div class="contact-hours">
        <p class="section-label">OPENING HOURS</p>
        <dl>
          <div><dt>Mon – Thu</dt><dd>12:00 – 23:00</dd></div>
          <div><dt>Fri – Sat</dt><dd>12:00 – 00:00</dd></div>
          <div><dt>Sunday</dt><dd>12:00 – 22:00</dd></div>
        </dl>
      </div>
      <img :src="decoration" class="contact-decoration" alt="" loading="lazy">
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-component { position: relative; overflow: hidden; }
.contact-container { display: grid; grid-template-columns: 1fr 0.9fr 0.65fr; align-items: center; gap: 48px; }
.contact-details, .contact-hours { position: relative; z-index: 1; }
.contact-details .section-title { margin-bottom: 32px; }
address { display: flex; flex-direction: column; gap: 24px; font-style: normal; font-size: 14px; line-height: 1.8; color: var(--color-muted); }
.contact-row { display: flex; align-items: flex-start; gap: 24px; }
.contact-row svg { margin-top: 3px; color: var(--color-text); }
.contact-row a { color: inherit; text-decoration: none; }
.map-link { display: inline-flex; gap: 20px; align-items: center; }
.contact-hours dl { margin: 0; color: var(--color-muted); font-size: 14px; }
.contact-hours dl div { display: flex; justify-content: space-between; gap: 24px; margin-top: 16px; }
.contact-hours dd { margin: 0; white-space: nowrap; }
.contact-decoration { position: absolute; right: -2%; top: 0; height: 100%; width: 30%; object-fit: contain; object-position: right center; opacity: 0.6; pointer-events: none; }
@media (max-width: 1000px) { .contact-container { grid-template-columns: 1fr 1fr; } .contact-decoration { opacity: 0.15; width: 45%; } }
@media (max-width: 600px) { .contact-container { grid-template-columns: 1fr; gap: 48px; } .contact-decoration { width: 75%; } .contact-hours { max-width: 340px; } }
</style>
