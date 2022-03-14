<template>
  <Slider v-if="products.length" :items-count="products.length">
    <div v-for="product in products" :key="product.name">
      <ProductCard v-bind="{product}" />
    </div>
  </Slider>
</template>

<script>

export default {
  data() {
    return {
      products: []
    }
  },
  mounted(){
    this.$axios.get('/products',  {params: { limit: 10, pack_type: 'pack'}})
      .then(({data: {products: {data}}}) => {
        this.products = data
      })
  }
}
</script>