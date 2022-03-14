<template>
  <div class="flex mt-2 mb-8">
    <span
      v-for="p in lastPage"
      :key="p"
      :class="{'border-Grey28': p != page, 'bg-primary-900 text-white': (p == page && disabled == false), 'bg-GreenLight': (p == page && disabled == true)}"
      class="flex items-center justify-center Comfortaa text-lg rounded-full border mr-2 w-[60px] h-[60px]"
      @click="$emit('page-changed', p)"
    >{{ p }}</span>
  </div>
</template>

<script>
export default {
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
        lastPage: {
            type: Number,
            required: true
        },
        page: {
            type: Number,
            default: 1
        },
        perPage: {
            type: Number,
            default: 12
        },
        total: {
            type: Number,
            default: 0
        }
    }
}
</script>