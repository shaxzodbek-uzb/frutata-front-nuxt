<template>
  <div class="w-full">
    <Container>
      <div class="flex flex-col Comfortaa mb-12">
        <div class="flex flex-row items-center mb-8 mt-8">
          <div class="flex flex-none mr-20">
            <p class="text-50 leading-50 text-black font-bold YanoneKaffeesatz">
              Наши
              <span class="text-Green">партнёры</span>
            </p>
          </div>
          <div class="flex flex-grow">
            <p
              class="text-15 leading-20 text-Grey max-w-592"
            >Компания Frutata — новичок на рынке Узбекистана, однако несмотря на свою короткую историю мы являемся одним.</p>
          </div>
        </div>
        <Slider :items-count="partners.length">
          <div
            v-for="partner in partners"
            :key="partner.id"
            class="h-32 bg-BGproducts rounded-20 p-4"
          >
            <img :src="$config.rootURL + partner.image" class="h-full block mx-auto" />
          </div>
        </Slider>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: "Partners",
  data(){
    return {
      partners: []
    }
  },
  mounted(){
    this.$axios.get('/partners').then(({data: {partners}}) => {
      this.partners = partners
    })
  }
}
</script>

<style lang="postcss">
</style>
