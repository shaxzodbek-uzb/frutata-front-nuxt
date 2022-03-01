<template>
  <div class="flex flex-row items-center w-280 h-32 border-dashed border-Green border my-2">
    <div class="flex flex-none">
      <div class="w-60 h-60 ml-3.5">
        <img :src="image" class="h-full mx-auto" />
      </div>
    </div>
    <div class="flex flex-grow m-3.5">
      <p class="text-15 leading-17 text-black Comfortaa">{{ text}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
}
</script>