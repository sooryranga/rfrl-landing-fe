<template>
  <div class="scrolable-full h-100 w-100">
    <div class="row w-100" id="hero-section">
      <div class="col h-100 flex-container">
        <div class="mx-auto my-auto">
          <h1 id="title" class="mx-auto my-auto">Land your dream job through referrals</h1>
          <div class="row-flex">
            <input type="email" name="fname">
          </div>
        </div>
      </div>
      <div class="col h-100">
        <img src="@/assets/pexels-cottonbro-4827576.jpg" class="h-100 w-100" style="object-fit: cover;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style scoped>
.scrolable-full{
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  color: var(--clr-gray-4);
}
#hero-section{
  background-color: var(--khaki-web);
  max-width: 95rem;
  margin-left: auto;
  margin-right: auto;
  height: 40rem;
}

#title {
  color: var(--clr-primary);
  max-width: 24ch;
}

.logo{
  font-family: 'Orbitron', sans-serif;
  color: var(--clr-gray-2);
  font-size: 4rem;
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
