<template>
  <div class="scrolable-full h-100 w-100">
    <div class="container-xl flex-container column-flex">
      <hero-section/>
      <what-we-offer/>
      <tutor-value/>
      <student-value/>
    </div>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import TutorValue from './TutorValue.vue';
import WhatWeOffer from './WhatWeOffer.vue';
import StudentValue from './StudentValue.vue';
export default {
  components: {HeroSection, TutorValue, WhatWeOffer, StudentValue},
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
