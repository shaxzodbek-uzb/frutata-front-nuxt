<template>
  <div>
    <!-- Navbar -->
    <header class="border-b border-primary ease-in duration-300 fixed w-full bg-white">
      <div class="container mx-auto">
        <div class="flex flex-row justify-between py-21px">
          <div class="basis-[50%]">
            <a href>
              <img src="logo/frutatalogo.png" alt />
            </a>
          </div>
          <div class="leading-15">
            <ul class="flex ">
              <li class="px-3 hover:text-lime500">
                <a href>Главная</a>
              </li>
              <li class="px-3 hover:text-lime500">
                <a href>О компании</a>
              </li>
              <li class="px-3 hover:text-lime500">
                <a href>Продукции</a>
              </li>
              <li class="px-3 hover:text-lime500 mr-12">
                <a href>Контакты</a>
              </li>
            </ul>
          </div>
          <div class="leading-15">
            <ul class="flex">
              <li class="px-3 hover:text-lime600"><a href="#">Uz</a></li>
              <li class="px-3 hover:text-lime600"><a href="#">Ru</a></li>
              <li class="px-3 hover:text-lime600"><a href="#">En</a></li>
            </ul>
          </div>
          <div class="flex items-center">
            <ul class="flex">
              <li class="px-2 flex items-center"><a href="https://www.instagram.com/" target="_blank" class="inline-block hover:opacity-75"><img src="icon/instagram.svg" alt /></a></li>
              <li class="px-2 flex items-center"><a href="https://www.facebook.com/" target="_blank" class="inline-block hover:opacity-75"><img src="icon/facebook.svg" alt /></a></li>
              <li class="px-2 flex items-center"><a href="https://www.youtube.com/" target="_blank" class="inline-block hover:opacity-75"><img src="icon/youtube.svg" alt /></a></li>
            </ul>
          </div>
          <div class="pl-8 text-right">
            <span class="text-sm text-lime500">Связаться с нами:</span>
            <br />
            <a class="text-sm hover:text-lime600" href="tel:998999999999">+998 99 999 99 99</a>
          </div>
        </div>
      </div>
    </header>
    <div class="pt-102px"></div>
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>

<style scoped>
</style>
