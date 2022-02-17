<template>
  <div>Xayrli kun - {{ $route.params.name }}, {{ $route.params.region }}!</div>
</template>

<script>
export default {
    validate({ params }) {
        // Must be a number
        return /^\d+$/.test(params.name)
    }
}
</script>