<script setup>
import { ref } from 'vue'
import AppButton from '../ui/AppButton.vue'
const menuOpen = ref(false)
const links = ['Home', 'Menu', 'About', 'Gallery', 'Contact']
</script>

<template>
  <section class="hero-component">
    <header class="hero-header">
      <a href="#" @click.prevent class="brand">VELLUTO</a>
      <button class="nav-toggle" type="button" :aria-expanded="menuOpen" aria-controls="main-navigation" @click="menuOpen = !menuOpen">{{ menuOpen ? 'Close' : 'Menu' }} <span aria-hidden="true">{{ menuOpen ? '×' : '☰' }}</span></button>
      <nav id="main-navigation" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
        <a v-for="(link, index) in links" :key="link" href="#" :aria-current="index === 0 ? 'page' : undefined" @click.prevent="menuOpen = false">{{ link }}</a>
      </nav>
      <AppButton class="header-reserve" variant="outline" as="a" href="#" @click.prevent>RESERVE A TABLE</AppButton>
    </header>
    <div class="container hero-content">
      <p class="hero-eyebrow">ITALIAN CUISINE<br>IN EVERY DETAIL</p>
      <h1>VELLUTO</h1>
      <div class="hero-actions">
        <AppButton variant="secondary" as="a" href="#" @click.prevent>EXPLORE MENU <span class="button-arrow" aria-hidden="true">⟶</span></AppButton>
        <AppButton variant="outline" as="a" href="#" @click.prevent>RESERVE A TABLE</AppButton>
      </div>
    </div>
    <div class="hero-index" aria-hidden="true"><span>01</span><i /><span>02</span><span>03</span><span>04</span><span>05</span></div>
    <div class="hero-scroll" aria-hidden="true"><span>↓</span> SCROLL DOWN</div>
  </section>
</template>

<style scoped lang="scss">
.hero-component { position: relative; display: flex; align-items: center; min-height: 100svh; padding: 160px var(--page-gutter) 140px; color: var(--color-light); background: linear-gradient(90deg, rgb(0 0 0 / 58%), rgb(0 0 0 / 12%)), url('../../assets/images/home/hero-background.png') center / cover no-repeat; }
.hero-header { position: absolute; top: 0; left: 0; width: 100%; padding: 32px 4%; display: flex; justify-content: space-between; align-items: center; gap: 32px; }
.hero-header nav { display: flex; gap: 32px; }
.hero-header nav a { padding: 8px 0; font-size: 13px; color: inherit; text-decoration: none; }
.hero-header nav a[aria-current] { border-bottom: 1px solid currentColor; }
.hero-content { width: 100%; }
.hero-eyebrow { position: relative; margin: 0 0 32px 64px; font-size: 12px; line-height: 1.9; letter-spacing: 0.25em; }
.hero-eyebrow::before { content: ''; position: absolute; left: -64px; top: 50%; width: 40px; height: 1px; background: var(--color-border-dark); }
h1 { font-size: clamp(88px, 12vw, 190px); font-weight: 300; line-height: 0.9; letter-spacing: 0.025em; }
.hero-actions { display: flex; gap: 16px; margin-top: 40px; flex-wrap: wrap; }
.hero-index { position: absolute; right: 5%; top: 32%; display: flex; flex-direction: column; align-items: center; gap: 24px; font-size: 11px; color: var(--color-muted-dark); }
.hero-index i { height: 30px; width: 1px; background: currentColor; }
.hero-scroll { position: absolute; bottom: 36px; right: 4%; display: flex; align-items: center; gap: 16px; font-size: 10px; letter-spacing: 0.15em; }
.hero-scroll span { display: grid; place-items: center; width: 32px; height: 32px; border: 1px solid var(--color-border-dark); border-radius: 50%; }
.nav-toggle { display: none; }
@media (max-width: 900px) { .hero-header { gap: 20px; } .hero-header nav { gap: 20px; } .header-reserve { display: none; } }
@media (max-width: 600px) {
  .hero-component { padding-top: 160px; padding-bottom: 120px; background-position: 55% center; }
  .hero-header { padding: 24px; flex-wrap: wrap; }
  .nav-toggle { display: flex; gap: 12px; align-items: center; padding: 10px 0 10px 16px; border: 0; background: transparent; color: inherit; font: inherit; font-size: 12px; }
  .hero-header nav { display: none; width: 100%; padding: 20px; background: var(--color-dark); flex-wrap: wrap; gap: 24px; }
  .hero-header nav.is-open { display: flex; }
  h1 { font-size: clamp(56px, 15vw, 90px); }
  .hero-eyebrow { font-size: 10px; margin-left: 48px; }
  .hero-eyebrow::before { left: -48px; width: 28px; }
  .hero-index { display: none; }
  .hero-actions { gap: 12px; margin-top: 32px; }
}
</style>
