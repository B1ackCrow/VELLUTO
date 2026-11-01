<script setup>
import mainImage from '@/assets/images/atmosphere/image-1.png'
import detailImage from '@/assets/images/atmosphere/image-2.png'
import tableImage from '@/assets/images/atmosphere/image-3.png'
</script>

<template>
  <section class="section section--light atmosphere-component">
    <div class="container atmosphere-container">
      <div>
        <p class="section-label">THE ATMOSPHERE</p>
        <h2 class="section-title">A Place<br>for Every Moment</h2>
        <p class="section-description">Elegant interiors, warm lighting and a relaxed atmosphere create the perfect setting — whether it’s a romantic dinner, a celebration, or a simple evening with friends.</p>
        <a href="#" @click.prevent class="text-link">VIEW GALLERY <span aria-hidden="true">⟶</span></a>
      </div>
      <div class="atmosphere-images">
        <img :src="mainImage" class="atmosphere-main" alt="Warmly lit Velluto dining room and wine cellar" loading="lazy">
        <img :src="detailImage" alt="Olive leaves in the evening light" loading="lazy">
        <img :src="tableImage" alt="Wine glasses and a table set for dinner" loading="lazy">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.atmosphere-container { display: grid; grid-template-columns: 0.85fr 1.3fr; align-items: center; gap: 70px; }
.atmosphere-images { display: grid; grid-template-columns: 1.85fr 1fr; grid-template-rows: repeat(2, minmax(0, 1fr)); gap: 12px; height: clamp(360px, 35vw, 560px); }
.atmosphere-images img { width: 100%; height: 100%; min-height: 0; object-fit: cover; }
.atmosphere-main { grid-row: span 2; }
@media (max-width: 900px) { .atmosphere-container { grid-template-columns: 1fr; gap: 40px; } }
@media (max-width: 600px) { .atmosphere-images { height: 340px; gap: 8px; grid-template-columns: 1.5fr 1fr; } }
</style>
