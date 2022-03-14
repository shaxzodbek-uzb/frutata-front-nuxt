<template>
  <div class="flex flex-col items-center bg-BGproducts rounded-20 w-full">
    <div class="h-28 sm:h-80 my-7">
      <img v-if="!loading" :src="imageFullPath" class="w-full h-24 sm:h-full" />
    </div>
    <p class="text-13 leading-14 text-black m-2.5 text-center">{{ packageType }}</p>
    <p class="flex flex-grow text-18 leading-20 text-DarkGreen m-2.5 text-center">{{ localeName }}</p>
    <div class="flex items-center flex-row my-4">
      <div class="mr-3">
        <p class="text-15 leading-17 text-DarkGreen">Подробнее</p>
      </div>
      <div>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="30" rx="15" fill="#93C92B" />
          <path
            d="M20.5504 15.3001C20.5504 15.5689 20.4478 15.8377 20.2429 16.0427L13.7932 22.4923C13.3829 22.9026 12.7177 22.9026 12.3076 22.4923C11.8975 22.0822 11.8975 21.4171 12.3076 21.0068L18.0147 15.3001L12.3078 9.59331C11.8977 9.18303 11.8977 8.51803 12.3078 8.10795C12.7179 7.69746 13.3831 7.69746 13.7934 8.10795L20.2431 14.5575C20.448 14.7626 20.5504 15.0314 20.5504 15.3001Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        packageType: {
            type: String,
            default: 'В пакетная упаковка'
        },
        product: {
            type: Object,
            default: () => ({})
        }
    },
    data(){
      return {
        imageFullPath: '',
        loading: true,
      }
    },
    computed: {
      localeName(){
        if(this.$i18n.locale === 'ru'){
          return this.product.name_ru
        }
        if(this.$i18n.locale === 'en'){
          return this.product.name_en
        }
        return this.product.name
      }
    },
    mounted(){
      this.imageFullPath = this.$config.rootURL+ this.product.image;
      this.loading = false
      // this.$axios.$get(this.imageFullPath).then(res =>{
      //   console.log(res)
      // })
      // .catch(() =>{
      //   // set  placeholder image service url
      //   this.imageFullPath = 'https://via.placeholder.com/300x300'
      // }).finally(() =>{
      //   this.loading = false
      // })
    }
}
</script>