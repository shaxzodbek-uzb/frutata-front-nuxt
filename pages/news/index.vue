<template>
  <div>
    <div class="container mx-auto">
      <div class="text-50 leading-50 text-black font-bold YanoneKaffeesatz">Новости</div>

      <div class="grid grid-cols-3 gap-3 mt-6 mb-8">
        <div
          v-for="n in news"
          :key="n.id"
          class="rounded-3xl w-[380px] h-[235px] overflow-hidden mb-4 relative"
        >
          <img :src="$config.rootURL + n.image" class="absolute top-0 bottom-0 right-0 left-0" />
          <div
            class="w-full inline-block align-baseline z-10 absolute bottom-0 pr-[50px] text-white flex justify-between pt-4 pl-2 pb-4"
            style="background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);"
          >
            <div>{{ n.title }}</div>
            <nuxt-link :to="`news/${n.id}`" class="absolute right-[10px] bottom-[20px]">
              <img src="/img/news/arrow-right.svg" class />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      news: []
    }
  },
  mounted(){
    // get news from api
    this.$axios.$get('/news').then(({news}) => {
      this.news = news
    });
  }
}
</script>