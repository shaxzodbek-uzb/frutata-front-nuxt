<template>
  <div>
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div class="flex w-2/5 text-50 leading-50 text-black font-bold YanoneKaffeesatz">
          Продукция &nbsp;
          <span class="text-primary-900">Frutata</span>
        </div>

        <div class="relative w-3/5 mb-6">
          <input
            type="text"
            class="Comfortaa border border-GreenFoot py-[12px] mt-1 block w-full px-3 py-2 bg-white rounded-3xl rounded-md text-sm shadow-sm placeholder-slate-400"
          />
          <button type="submit" class="absolute right-3 top-[18px]">
            <img src="/img/products-all/search.png" />
          </button>
        </div>
      </div>

      <div class="flex justify-between mt-6 mb-8">
        <div class="flex w-[100%-280px]">
          <div
            class="mr-3 py-4 px-4 rounded-30 text-lg Comfortaa"
            :class="{'bg-primary-900 text-white': pack_type == null, 'bg-BGproducts text-GreyLight': pack_type != null}"
            @click="pack_type = null"
          >Все категории ({{ full_total }})</div>
          <div
            class="mr-3 py-4 px-4 rounded-30 text-lg Comfortaa"
            :class="{'bg-primary-900 text-white': pack_type == 'pack', 'bg-BGproducts text-GreyLight': pack_type != 'pack'}"
            @click="pack_type = 'pack'"
          >В пакетной упаковке ({{ count_pack }})</div>
          <div
            class="mr-3 py-4 px-4 rounded-30 text-lg Comfortaa"
            :class="{'bg-primary-900 text-white': pack_type == 'bank', 'bg-BGproducts text-GreyLight': pack_type != 'bank'}"
            @click="pack_type = 'bank'"
          >В баночной упаковке ({{ full_total - count_pack }})</div>
        </div>

        <div class="flex w-[280px] justify-end">
          <span
            class="flex block py-4 px-2 rounded-30 text-GreyLight text-lg Comfortaa border-GreenFoot"
          >Показавать:</span>
          <select
            ref="perPageSelect"
            v-model="perPage"
            class="rounded-select"
            @change="loadProducts"
          >
            <option :value="3">3</option>
            <option :value="5">5</option>
            <option :value="10">10</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-3 mt-6 mb-8 Comfortaa">
        <ProductCard v-for="product in products" :key="product.id" v-bind="{product}" />
      </div>

      <Paginator
        :last-page="lastPage"
        :page="currentPage"
        :disabled="loading"
        @page-changed="changePage"
      />
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      products: [],
      pack_type: null,
      lastPage: 0,
      perPage: 3,
      currentPage: 1,
      total: 1,
      count_pack: 0,
      full_total: 0,
      loading: false
    }
  },
  watch: {
    pack_type(){
      // get products from api
      this.loadProducts();
    }
  },
  mounted(){
    // get products from api
    this.loadProducts()
  },
  methods: {
    changePage(newPage){
      if(this.loading) return;
      this.currentPage = newPage
      this.loadProducts();
    },
    loadProducts(){
      if(this.loading) return;

      this.loading = true;
      // TODO ??? matematika
      if(this.total < this.perPage * this.currentPage){
        console.log('no more products')
        this.currentPage = parseInt((this.total + this.perPage) / this.perPage)
      }
      this.$axios.$get('/products',{params: {page: this.currentPage, limit: this.perPage, pack_type: this.pack_type}}).then((response) => {
        this.products = response.products.data
        this.lastPage = response.products.last_page
        this.currentPage = response.products.current_page
        this.total = response.products.total
        this.count_pack = response.count_pack
        this.full_total = response.total
        setTimeout(() => {
          
          this.loading = false;
        }, 2000);

      })
    },
  }
}
</script>

<style lang="css">
.rounded-select {
  background-color: white;
  border: 1px solid;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 4rem;
  text-align: center;
}
</style>