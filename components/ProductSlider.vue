<template>
  <client-only>
    <Slider v-if="products.length" :items-count="products.length">
      <div v-for="product in products" :key="product.name">
        <ProductCard v-bind="{product}" />
      </div>
    </Slider>
  </client-only>
</template>

<script>

export default {
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