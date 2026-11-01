<script setup>
import mainImage from '@/assets/images/philosophy/main-image.png'
import handImage from '@/assets/images/philosophy/hand-image.png'
</script>

<template>
  <section class="philosophy-component">
    <div class="philosophy-container">

      <!-- Text -->
      <div class="philosophy-content">
        <div class="philosophy-label">
          <span>OUR PHILOSOPHY</span>
          <span class="label-line"></span>
        </div>

        <h2 class="philosophy-title">
          More than<br>
          a restaurant
        </h2>

        <p class="philosophy-description">
          At Velluto, we believe dining is a journey — a moment to slow down,
          to connect, and to experience the authentic beauty of Italian cuisine.
          We combine traditional flavors with a modern approach, creating dishes
          that tell a story of heritage, passion, and craftsmanship.
        </p>
      </div>

      <!-- Images -->
      <div class="philosophy-images">
        <img
            :src="mainImage"
            alt="Velluto fine dining"
            class="main-image"
        />

        <img
            :src="handImage"
            alt="Chef preparing a dish"
            class="hand-image"
        />
      </div>

      <!-- Quote -->
      <div class="philosophy-quote">
        <span>“Good food<br>brings people<br>together.”</span>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.philosophy-component {
  width: 100%;
  padding: 120px 7%;
  background: #f5f1ea;
  color: #24231f;
}

.philosophy-container {
  display: grid;
  grid-template-columns: 1fr 1.15fr 0.45fr;
  align-items: center;
  gap: 60px;

  max-width: 1600px;
  margin: 0 auto;
}

// TEXT

.philosophy-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.philosophy-label {
  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 32px;

  font-family: 'Manrope', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  white-space: nowrap;

  .label-line {
    width: 40px;
    height: 1px;
    background: #aaa49a;
  }
}

.philosophy-title {
  margin: 0 0 32px;

  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(48px, 4.5vw, 80px);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.02em;
}

.philosophy-description {
  max-width: 420px;
  margin: 0;

  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.9;
  color: #777168;
}

// IMAGES

.philosophy-images {
  position: relative;
  width: 100%;
}

.main-image {
  display: block;
  width: 100%;
  height: 440px;

  object-fit: cover;
}

.hand-image {
  position: absolute;
  top: 8%;
  right: -15%;

  width: 48%;
  height: 220px;

  object-fit: cover;

  border: 2px solid #f5f1ea;
}

// QUOTE

.philosophy-quote {
  align-self: end;
  padding-bottom: 40px;

  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(24px, 2.2vw, 38px);
  font-style: italic;
  opacity: 0.7;
  font-weight: 300;
  line-height: 1.15;
  text-align: center;
  color: #74685c;
}

// TABLET

@media (max-width: 1200px) {
  .philosophy-container {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  .philosophy-quote {
    grid-column: 2;
    justify-self: end;
    padding: 0;
  }

  .hand-image {
    right: -5%;
  }
}

// MOBILE

@media (max-width: 768px) {
  .philosophy-component {
    padding: 80px 24px;
  }

  .philosophy-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .philosophy-label {
    margin-bottom: 24px;
  }

  .philosophy-title {
    font-size: clamp(48px, 10vw, 72px);
    margin-bottom: 24px;
  }

  .philosophy-description {
    max-width: 100%;
    font-size: 13px;
  }

  .philosophy-images {
    margin-top: 20px;
  }

  .main-image {
    height: 350px;
  }

  .hand-image {
    top: -25px;
    right: 0;

    width: 45%;
    height: 130px;

    border-width: 4px;
  }

  .philosophy-quote {
    grid-column: 1;
    justify-self: end;

    font-size: 30px;
    text-align: right;
  }
}
</style>