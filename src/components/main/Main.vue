<template>
  <div class="container-xl flex-container column-flex p-0">
    <hero-section/>
    <what-we-offer/>
    <tutor-value/>
    <student-value/>
    <conclusion/>
  </div>
</template>

<script>
import HeroSection from '@/components/main/HeroSection.vue';
import TutorValue from '@/components/main/TutorValue.vue';
import WhatWeOffer from '@/components/main/WhatWeOffer.vue';
import StudentValue from '@/components/main/StudentValue.vue';
import Conclusion from '@/components/main/Conclusion.vue';

export default {
  components: {HeroSection, TutorValue, WhatWeOffer, StudentValue, Conclusion},
  data() {
    return {
      mainContainer: {
        background: `url(${
          require('@/assets/pexels-vlada-karpovich-4050299.jpg')
        }) no-repeat center center`,
        backgroundSize: 'cover',
        boxShadow: 'inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)',
        position: 'relative',
        height: '100%',
      },
      secondContainer: {
        background: `url(${
          require('@/assets/pexels-christina-morillo-1181275.jpg')
        }) no-repeat center center`,
        backgroundSize: 'cover',
        boxShadow: 'inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)',
        position: 'relative',
        height: '100%',
      },
    };
  },
};
</script>

<style>
.scrolable-full{
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  color: var(--clr-gray-4);
}

.flex-container{
  display:flex;
}
.column-flex {
  display:flex;
  flex-direction: column;
}
.row-flex {
  display:flex;
  flex-direction: row;
}
</style>
