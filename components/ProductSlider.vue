<template>
  <div class="flex relative Comfortaa">
    <div class="absolute top-56 -left-20 cursor-pointer" @click="$refs['product-carousel'].prev()">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="50" height="50" rx="25" transform="matrix(-1 0 0 1 50 0)" fill="#E7E7E7" />
        <path
          d="M15.7493 25.5C15.7493 25.9481 15.9204 26.3961 16.2618 26.7377L27.0114 37.4871C27.6952 38.1709 28.8038 38.1709 29.4874 37.4871C30.1709 36.8036 30.1709 35.6951 29.4874 35.0113L19.9756 25.5L29.487 15.9887C30.1706 15.3049 30.1706 14.1966 29.487 13.5131C28.8035 12.829 27.6948 12.829 27.011 13.5131L16.2615 24.2624C15.92 24.6042 15.7493 25.0522 15.7493 25.5Z"
          fill="white"
        />
      </svg>
    </div>
    <VueSlickCarousel
      v-if="products.length > 0"
      ref="product-carousel"
      class="w-full"
      :slides-to-show="3"
      :infinite="true"
      :dots="false"
    >
      <div v-for="product in products" :key="product.name">
        <ProductCard v-bind="{product}" />
      </div>
    </VueSlickCarousel>
    <div class="absolute top-56 -right-20 cursor-pointer" @click="$refs['product-carousel'].next()">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="50" height="50" rx="25" fill="#E7E7E7" />
        <path
          d="M34.2507 25.5C34.2507 25.9481 34.0796 26.3961 33.7382 26.7377L22.9886 37.4871C22.3048 38.1709 21.1962 38.1709 20.5126 37.4871C19.8291 36.8036 19.8291 35.6951 20.5126 35.0113L30.0244 25.5L20.513 15.9887C19.8294 15.3049 19.8294 14.1966 20.513 13.5131C21.1965 12.829 22.3052 12.829 22.989 13.5131L33.7385 24.2624C34.08 24.6042 34.2507 25.0522 34.2507 25.5Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      products: []
    }
  },
  mounted(){
    this.$axios.get('/products')
      .then(({data: {products}}) => {
        this.products = products
      })
  }
}
</script>
