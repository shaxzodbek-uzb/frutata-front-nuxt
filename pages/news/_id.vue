
<template>
  <div>
    <div class="container mx-auto">
      <div class="text-50 leading-50 text-black font-bold YanoneKaffeesatz">Новости</div>

      <div class="flex">
        <div class="w-2/3">
          <div class="relative">
            <img :src="$config.rootURL+ news.image" class="w-full rounded-xl" alt />
            <div class="rounded-full bg-white absolute top-4 left-4 p-2 text-Green">{{ date }}</div>
          </div>
          <p class="text-28 text-black font-bold YanoneKaffeesatz">{{ news.title}}</p>
          <p class="Comfortaa" v-html="news.content" />
        </div>
        <div class="w-1/3">
          <div class="flex flex-col items-center w-full">
            <div
              v-for="n in newsList"
              :key="n.id"
              class="rounded-3xl w-[380px] h-[235px] overflow-hidden mb-4 relative"
            >
              <img :src="$config.rootURL + n.image" class="absolute top-0 bottom-0 right-0 left-0" />
              <div
                class="w-full inline-block align-baseline z-10 absolute bottom-0 pr-[50px] text-white flex justify-between pt-4 pl-2 pb-4"
                style="background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);"
              >
                <div>{{ n.title }}</div>
                <a href="#" class="absolute right-[10px] bottom-[20px]">
                  <img src="/img/news/arrow-right.svg" class />
                </a>
              </div>
            </div>
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
            news: {
                id: 0,
                title: '',
                content: '',
                image: '',
                created_at: ''
            },
            newsList: []
        }
    },
    computed: {
        date(){
            return this.news.created_at.substring(0, 10)
        }
    },
    mounted(){
        console.log(this.$route.params.id)
        this.$axios.$get('/news/' + this.$route.params.id).then(({news}) => {
            this.news = news
        });
        this.$axios.$get('news').then(({news}) => {
            this.newsList = news
        });
    }
}
</script>