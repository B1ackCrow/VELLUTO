<script setup>

import AppButton from "../ui/AppButton.vue";
</script>

<template>
<div class="hero-component">
  <h1 class="title">VELLUTO</h1>
  <p class="text">ITALIAN CUISINE<br>IN EVERY DETAIL</p>
  <div class="row">
    <app-button variant="secondary" size="large">EXPLORE MENU</app-button>
    <app-button variant="outline" size="large">RESERVE A TABLE</app-button>
  </div>
</div>
</template>

<style scoped lang="scss">
.hero-component {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  min-height: 100svh;
  padding: 120px 7%;

  color: #fff;

  background-image:
      linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0.35) 45%,
              rgba(0, 0, 0, 0.1) 100%
      ),
      url('../../assets/images/home/hero-background.png');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title {
  margin: 0;

  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(90px, 12vw, 190px);
  font-weight: 300;
  line-height: 0.85;
  letter-spacing: 0.035em;
}

.text {
  margin: 32px 0 0;

  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 0.35em;
}

.row {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: 48px;
}

// Tablet
@media (max-width: 1024px) {
  .hero-component {
    padding: 100px 6%;
  }

  .title {
    font-size: clamp(80px, 13vw, 140px);
  }
}

// Mobile
@media (max-width: 600px) {
  .hero-component {
    min-height: 100svh;
    padding: 100px 24px 60px;

    background-position: 55% center;
  }

  .title {
    font-size: clamp(60px, 15vw, 100px);
    letter-spacing: 0.015em;
  }

  .text {
    margin-top: 24px;
    font-size: 10px;
    letter-spacing: 0.25em;
  }

  .row {
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 36px;
  }
}
</style>