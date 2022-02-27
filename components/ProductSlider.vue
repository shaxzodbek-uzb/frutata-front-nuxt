<template>
  <div class="w-full">
    <Container>
      <div class="flex flex-col Comfortaa mb-12">
        <div class="flex mb-10">
          <div class="flex flex-none">
            <p class="text-50 leading-50 text-black font-bold YanoneKaffeesatz mr-10">
              Продукции
              <span class="text-Green">Frutata</span>
            </p>
          </div>
          <div class="flex flex-grow">
            <a href="#" class="flex flex-row items-center">
              <div class="mr-18">
                <p class="text-15 leading-17 text-DarkGreen">Все продукции</p>
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
            </a>
          </div>
        </div>
        <div class="flex relative Comfortaa">
          <div class="absolute top-56 -left-20">
            <a href="#">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="50"
                  height="50"
                  rx="25"
                  transform="matrix(-1 0 0 1 50 0)"
                  fill="#E7E7E7"
                />
                <path
                  d="M15.7493 25.5C15.7493 25.9481 15.9204 26.3961 16.2618 26.7377L27.0114 37.4871C27.6952 38.1709 28.8038 38.1709 29.4874 37.4871C30.1709 36.8036 30.1709 35.6951 29.4874 35.0113L19.9756 25.5L29.487 15.9887C30.1706 15.3049 30.1706 14.1966 29.487 13.5131C28.8035 12.829 27.6948 12.829 27.011 13.5131L16.2615 24.2624C15.92 24.6042 15.7493 25.0522 15.7493 25.5Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <VueSlickCarousel
            v-if="!loading"
            ref="product-carousel"
            class="w-full"
            :slides-to-show="3"
            :infinite="true"
            :dots="true"
          >
            <div v-for="product in products" :key="product.name">
              <div class="flex flex-col items-center bg-BGproducts rounded-20 w-96 h-540">
                <div class="h-80 my-7">
                  <img :src="product.image" class="w-full h-full" />
                </div>
                <p class="text-13 leading-14 text-black m-2.5 text-center">В пакетная упаковка</p>
                <p
                  class="flex flex-grow text-18 leading-20 text-DarkGreen m-2.5 text-center"
                >{{ product.name }}</p>
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
            </div>
          </VueSlickCarousel>
          <Modal />
          <div class="absolute top-56 -right-20">
            <a href="#">
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
            </a>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "ProductSlider",
  components: { VueSlickCarousel },
  data() {
    return {
      loading: true,
      products: []
    }
  },
  mounted(){
      
      this.products = [
          {name: 'Грушевые чипсы', image: '/products-01.png'},
          {name: 'Микс «Персик, груша, инжир»', image: '/products-02.png'},
          {name: 'Фруктовый микс «Слива, яблоко, абрикос»', image: '/products-03.png'},
          {name: 'Фруктовый микс «Слива, яблоко, абрикос»', image: '/products-03.png'},
          {name: 'Фруктовый микс «Слива, яблоко, абрикос»', image: '/products-03.png'},
      ]
      this.loading = false
  }
}
</script>

<style lang="postcss">
</style>
