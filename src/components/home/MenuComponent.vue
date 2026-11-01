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

        <RouterLink class="menu-link" to="/menu">
          VIEW FULL MENU
          <span aria-hidden="true">⟶</span>
        </RouterLink>
      </div>

      <div class="menu-categories">
        <RouterLink
            v-for="category in categories"
            :key="category.id"
            :to="{ path: '/menu', query: { category: category.id } }"
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
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.menu-section {
  display: flex;
  align-items: center;
  min-height: 80svh;
  padding: 120px 7%;
  background: radial-gradient(
          ellipse at 65% 50%,
          #282017 0%,
          #100e0b 65%
  );
  color: #ede8e0;
}

.menu-container {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.6fr);
  align-items: center;
  gap: 56px;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.menu-label {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
  font-size: 12px;
  letter-spacing: 0.2em;
  color: #b5ada1;
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
    color: #b5ada1;
  }
}

.menu-link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 19px 28px;
  border: 1px solid #8d8375;
  color: inherit;
  text-decoration: none;
  font-size: 11px;
  letter-spacing: 0.15em;
  transition: background 0.2s;

  &:hover {
    background: rgb(237 232 224 / 8%);
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
  border: 1px solid rgb(237 232 224 / 12%);
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
    outline: 2px solid #ede8e0;
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