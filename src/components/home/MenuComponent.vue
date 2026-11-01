<script setup>
import { computed } from 'vue'
import { menuCategories, menuItems } from '@/data/menu'

const categories = computed(() =>
    menuCategories
        .filter(category => category.id !== 'all')
        .map(category => ({
          ...category,
          image: menuItems.find(item => item.category === category.id)?.image,
        }))
)
</script>

<template>
  <section class="menu-section">
    <div class="menu-container">
      <div class="menu-content">
        <div class="menu-label">
          <span>OUR MENU</span>
          <span class="menu-line" />
        </div>

        <h2>A Journey<br>Through Italy</h2>

        <p>
          From handmade pasta to the finest seasonal ingredients,
          our menu celebrates the rich culinary heritage of Italy
          with a modern expression.
        </p>

        <a class="menu-link" href="#" @click.prevent>
          VIEW FULL MENU
          <span aria-hidden="true">⟶</span>
        </a>
      </div>

      <div class="menu-categories">
        <a
            v-for="category in categories"
            :key="category.id"
            href="#" @click.prevent
            class="menu-card"
        >
          <div class="menu-card__image">
            <img
                :src="category.image"
                :alt="category.title"
                loading="lazy"
            >
          </div>

          <div class="menu-card__body">
            <h3>{{ category.title }}</h3>
            <span class="menu-line" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.menu-section {
  display: flex;
  align-items: center;
  min-height: 80svh;
  padding: var(--section-space) var(--page-gutter);
  background: radial-gradient(
          ellipse at 65% 50%,
          var(--color-dark-glow) 0%,
          var(--color-dark) 65%
  );
  color: var(--color-light);
}

.menu-container {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.6fr);
  align-items: center;
  gap: 56px;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
}

.menu-label {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
  font-size: 12px;
  letter-spacing: 0.2em;
  color: var(--color-muted-dark);
}

.menu-line {
  display: block;
  width: 32px;
  height: 1px;
  background: currentColor;
  opacity: 0.45;
}

.menu-content {
  h2 {
    font-size: clamp(56px, 5vw, 88px);
    font-weight: 400;
    line-height: 0.95;
    letter-spacing: -0.02em;
  }

  p {
    max-width: 420px;
    margin: 32px 0 40px;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-muted-dark);
  }
}

.menu-link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 19px 28px;
  border: 1px solid var(--color-border-dark);
  color: inherit;
  text-decoration: none;
  font-size: 11px;
  letter-spacing: 0.15em;
  transition: background 0.2s;

  &:hover {
    background: color-mix(in srgb, var(--color-light) 8%, transparent);
  }

  span {
    font-size: 24px;
    line-height: 1;
  }
}

.menu-categories {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.menu-card {
  min-width: 0;
  border: 1px solid color-mix(in srgb, var(--color-light) 12%, transparent);
  color: inherit;
  text-decoration: none;

  &__image {
    overflow: hidden;
    aspect-ratio: 3 / 4;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.35s;
    }
  }

  &__body {
    padding: 28px 22px;

    h3 {
      margin: 0 0 22px;
      font-family: var(--font-body);
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.menu-link,
.menu-card {
  &:focus-visible {
    outline: 2px solid var(--color-light);
    outline-offset: 5px;
  }
}

@media (max-width: 1100px) {
  .menu-section {
    min-height: auto;
    padding: 100px 7%;
  }

  .menu-container {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .menu-content p {
    max-width: 520px;
  }
}

@media (max-width: 600px) {
  .menu-section {
    padding: 80px 24px;
  }

  .menu-label {
    margin-bottom: 24px;
    font-size: 11px;
  }

  .menu-content {
    h2 {
      font-size: clamp(48px, 10vw, 64px);
    }

    p {
      margin: 24px 0 32px;
      font-size: 14px;
    }
  }

  .menu-link {
    padding: 17px 24px;
  }

  .menu-categories {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .menu-card {
    &__image {
      aspect-ratio: 4 / 3;
    }

    &__body {
      padding: 24px;

      h3 {
        margin-bottom: 18px;
      }
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .menu-card__image img,
  .menu-link {
    transition: none;
  }

  .menu-card:hover img {
    transform: none;
  }
}
</style>