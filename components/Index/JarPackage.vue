<template>
  <div class="w-full">
    <Container>
      <div class="flex flex-row justify-between Comfortaa mb-12 pt-20">

        <div class="flex w-580 h-270 bg-gradient-to-r from-YellowFrom to-YellowTo rounded-30">

          <div class="flex flex-none pl-2 pr-2">
            <div class="relative w-64 h-full">
              <img src="/bonka.png" class="absolute h-80 -top-60 left-1/2 TransformTranlateX">
              <img src="/malina.png" class="absolute h-28 bottom-0 right-0">
            </div>
          </div>
          <div class="flex flex-grow flex-col">
            <div class="mb-5 mt-11">
              <p class="text-28 leading-28 text-Red YanoneKaffeesatz">Баночная упаковка</p>
            </div>
            <div class="pr-5 pb-5">
              <p class="text-15 leading-20 text-DarkGreen">
                Компания Frutata — новичок на рынке Узбекистана, однако несмотря на свою короткую историю мы
                являемся одним из немногих производителей сублимированных фруктов.
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-580 h-270 bg-gradient-to-r from-GreenFrom70 to-GreenTo70 rounded-30">
          <div class="flex flex-none pl-2 pr-2">
            <div class="relative w-64 h-full">
                <img src="/paket.png" class="absolute h-80 -top-60 left-1/2 TransformTranlateX">
                <img src="/dinya.png" class="absolute h-28 bottom-0 right-0">
            </div>
          </div>
          <div class="flex flex-grow flex-col">
            <div class="mb-5 mt-11">
              <p class="text-28 leading-28 text-Red YanoneKaffeesatz">Пакетная упаковка</p>
            </div>
            <div class="pr-5 pb-5">
              <p class="text-15 leading-20 text-DarkGreen">
                Новичок на рынке Узбекистана, однако несмотря на свою короткую немногих производителей сублимированных фруктов.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: "JarPackage"
}
</script>

<style lang="postcss">

</style>
