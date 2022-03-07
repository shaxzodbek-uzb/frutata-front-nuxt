<template>
  <div class="container mx-auto">

    <span class="flex items-center justify-center Comfortaa text-lg mb-8 rounded-full border border-Grey28 mr-2 w-[60px] h-[60px]">
      <img src="/img/products-all/arrow-left.svg"/>
    </span>

    <div class="flex">
      <div class="w-2/5 rounded-30 overflow-hidden border border-grey-200 p-1.5 bg-grey-100">
        <img src="/img/products-all/products-1.jpg"/>
      </div>
      <div class="w-3/5 pl-60 pr-10">
        <div class="flex text-50 leading-60 pt-60 text-black font-bold YanoneKaffeesatz">
          Сублимированные сухофрукты FRUTATA Яблоко
        </div>
        <div class="bg-primary-200 border border-primary-300 inline-block rounded-3xl px-6 py-2 mt-6">В баночной упаковке</div>
        <div class="YanoneKaffeesatz text-primary-900 text-28 my-6">Описание</div>
      </div>
    </div>

    <div class="flex justify-between mt-60 mb-8">
      <div class="flex w-2/5 text-50 leading-50 text-black font-bold YanoneKaffeesatz">
        Другия  &nbsp;
        <span class="text-primary-900">продукции</span>
      </div>
    </div>

    <div class="mb-60">
      <ProductSlider :products="products" />
    </div>

  </div>
</template>


<script>
import products from '~/api/products';

export default {
  data() {
    return {
      loading: false,
      products
    }
  }
}
</script>
