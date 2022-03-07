<template>
  <div @click="toggleTheme">Theme: {{ theme }}</div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useThemeStore } from '~/store/theme'
    export default {
        computed: {
            ...mapState(useThemeStore, ['theme'])
        },
        methods: {
            ...mapActions(useThemeStore, ['toggleTheme']),
           
        }
    }
</script>