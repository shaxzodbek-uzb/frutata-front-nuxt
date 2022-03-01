<template>
  <div class="w-full">
    <Container>
      <div class="flex flex-col Comfortaa py-12">
        <div class="flex flex-row items-center mb-14">
          <div class="flex flex-none mr-20">
            <p class="text-50 leading-50 text-black font-bold YanoneKaffeesatz">
              Говоря о
              <span class="text-Green">Frutata</span>
            </p>
          </div>
          <div class="flex flex-grow max-w-592">
            <p
              class="text-15 leading-20 text-Grey"
            >Компания Frutata — новичок на рынке Узбекистана, однако несмотря на свою короткую историю мы являемся одним.</p>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col flex-none">
            <GroupItem
              v-for="(item, idx) in group1"
              :key="idx"
              v-bind="item"
              class="flex flex-row items-center w-280 h-32 border-dashed border-Green border my-2"
            />
          </div>
          <div class="flex flex-grow">
            <div class="flex flex-grow items-center relative">
              <div class="absolute bottom-0 left-1/2 TransformTranlateX w-356">
                <nuxt-img
                  src="/about-img-01.png"
                  class="w-full h-full"
                  sizes="sm:100vw md:356px lg:356px"
                />
              </div>
              <div class="absolute -bottom-9 left-1/2 w-56">
                <img src="/about-img-02.png" class="w-full h-full" />
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-none">
            <GroupItem v-for="(item, idx) in group2" :key="idx" v-bind="item" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import GroupItem from './GroupItem'
export default {
    components: {GroupItem},
  data(){
    return {
      group1: [
        {image: '/about-01.png',text: 'Вся польза и вкус сочной спелой груши в одном пакетике, который.'},
        {image: '/about-02.png',text: 'Вся польза и вкус сочной спелой груши в одном пакетике, который.'},
        {image: '/about-03.png',text: 'Вся польза и вкус сочной спелой груши в одном пакетике, который.'}
      ],
      group2: [
        {image: '/about-04.png',text: 'Вся польза и вкус сочной спелой груши в одном пакетике, который.'},
        {image: '/about-05.png',text: 'Вся польза и вкус сочной спелой груши в одном пакетике, который.'},
        {image: '/about-06.png',text: 'Вся польза и вкус сочной спелой груши в одном пакетике, который.'}
      ]
    }
  }
}
</script>
