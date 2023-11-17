<template>
  <div class="scrolable-full">
    <div :style="mainContainer">
      <div class="h-100 container-xl">
        <div class="h-100 w-100 flex-container">
          <div class="left-side my-auto p-5 white-overlay text-container">
            <h1 id="title"><span class="logo">rfrl</span> helps professionals land their dream job</h1>
            <p id="subtitle">Get referred and improve your chances by 20 folds</p>
            <button type="button" class="btn btn-lg btn-light" id="cta">Get Your Dream Job</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentLandingPage',
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
    };
  },
};
</script>

<style scoped>
.scrolable-full{
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  color: var(--clr-gray-4);
}

.white-overlay{
  background-color: rgba(255, 255, 255, 0.85);
}

.text-container{
  max-width: 70ch;
}

.left-side{
  margin-left:1rem;
}

#cta{
  font-size:1.6rem;
  font-weight: 500;
  margin-top: 2rem;
  color: var(--clr-gray-1);
}

#title{
  letter-spacing: -1px;
}

#subtitle{
  letter-spacing: 1px;
  margin: 1rem 1rem 0 0;
}

.logo{
  font-family: 'Orbitron', sans-serif;
  color: var(--clr-gray-2);
  font-size: 4rem;
}
</style>

