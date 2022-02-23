<template>
  <div>
    <!-- Navbar -->
    <header class="flex justify-between py-8">
      <div class="pl-4">
        <a href>
          <img src="logo/frulogo.svg" alt />
        </a>
      </div>
      <div class="py-4">
        <ul class="flex px-4">
          <li class="px-6 hover:text-lime500">
            <a href>Главная</a>
          </li>
          <li class="px-6 hover:text-lime500">
            <a href>О компании</a>
          </li>
          <li class="px-6 hover:text-lime500">
            <a href>Продукции</a>
          </li>
          <li class="px-6 hover:text-lime500 mr-12">
            <a href>Контакты</a>
          </li>
        </ul>
      </div>
      <div class="flex py-5">
        <ul class="flex text-sm">
          <li class="pr-2 hover:text-lime600"><a href="#">Uz</a></li>
          <li class="pr-2 hover:text-lime600"><a href="#">Ru</a></li>
          <li class="hover:text-lime600"><a href="#">En</a></li>
        </ul>
      </div>
      <div class="pl-8 px-10">
        <span class="text-sm text-lime500">Связаться с нами:</span>
        <br />
        <span class="text-sm">+998 99 999 99 99</span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Default"
}
</script>

<style scoped>
</style>
