<script setup>
import AppIcon from '../ui/AppIcon.vue'
const links = ['Home', 'Menu', 'About', 'Gallery', 'Contact']
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer section--dark">
    <div class="container footer-container">
      <div><a href="#" @click.prevent class="brand">VELLUTO</a><p>Italian cuisine. Timeless atmosphere.</p></div>
      <nav aria-label="Footer navigation"><a v-for="link in links" :key="link" href="#" @click.prevent>{{ link }}</a></nav>
      <div class="footer-social"><a href="#" @click.prevent aria-label="Instagram"><AppIcon name="instagram" /></a><a href="#" @click.prevent aria-label="Facebook"><AppIcon name="facebook" /></a></div>
      <p class="copyright">© {{ year }} Velluto. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.site-footer { padding: 48px var(--page-gutter); }
.footer-container { display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; }
p { margin: 12px 0 0; color: var(--color-muted-dark); font-size: 11px; }
nav, .footer-social { display: flex; gap: 28px; align-items: center; }
a { color: inherit; text-decoration: none; }
nav a { font-size: 12px; }
.footer-social { gap: 20px; }
.footer-social a { display: flex; padding: 8px; }
.copyright { border-left: 1px solid var(--color-border-dark); padding-left: 24px; margin: 0; }
@media (max-width: 600px) { .footer-container { flex-direction: column; align-items: flex-start; gap: 24px; } nav { flex-wrap: wrap; gap: 24px; } .copyright { padding: 0; border: 0; } }
</style>
