<template>
  <div class="w-full border flex justify-center">
    <div class="container text-center border flex h-20 mt-6">
      <div class="border flex-none w-48">logo</div>
      <div class="border flex-grow flex">
        <div class="flex-grow border">
          <ul class="flex border items-center h-full">
            <li class="flex-1 link border">Main page</li>
            <li class="flex-1 link border active-link">About us</li>
            <li class="flex-1 link border">Products</li>
            <li class="flex-1 link border">News</li>
            <li class="flex-1 link border">Contacts</li>
          </ul>
        </div>
        <div class="flex-none border">
          <ul class="flex items-center h-full">
            <li class="w-12 border p-2">UZ</li>
            <li class="w-12 border p-2">RU</li>
            <li class="w-12 border p-2">EN</li>
          </ul>
        </div>
        <div class="flex-none border">
          <ul class="flex items-center h-full">
            <li
              class="flex-1 border social-icon rounded-full bg-primary text-white flex items-center justify-center"
            >F</li>
            <li
              class="flex-1 border social-icon rounded-full bg-primary text-white flex items-center justify-center"
            >T</li>
            <li
              class="flex-1 border social-icon rounded-full bg-primary text-white flex items-center justify-center"
            >I</li>
          </ul>
        </div>
      </div>
      <div class="border flex-none w-48">
        <div class="flex justify-center flex-col h-full border">
          <p class="border">Связьться с нами</p>
          <p class="border">+998 98 121 2776</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  }
</script>

<style lang="postcss">
.active-link {
  @apply text-primary;
}
.link {
  @apply p-2;
}
.social-icon {
  @apply w-6 h-6;
}
</style>