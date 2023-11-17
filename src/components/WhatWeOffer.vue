<template>
  <div class="row w-100" id="section">
    <h2 id="section-title" class="section-padding">What do we offer</h2>
    <div class="w-100 flex-container">
      <div id="direct-messaging" class="feature">
        <div class="my-2 w-100">
          <img src="@/assets/practice-console.png" class="feature-img"/>
          <h5 class="feature-title">Practice together</h5>
        </div>
      </div>
      <div id="find-people" class="feature">
        <div class="my-2 w-100">
          <img src="@/assets/direct-messaging.png" class="feature-img"/>
          <h5 class="feature-title">Converse Directly</h5>
        </div>
      </div>
      <div id="practice" class="feature">
        <div class="my-2 w-100">
          <img src="@/assets/profile-section.png" class="feature-img"/>
          <h5 class="feature-title">Choose Your Client</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

.flex-container{
  display:flex;
  flex-wrap: nowrap;
  justify-content:space-around;
}

#section{
  background-color: var(--clr-primary);
  padding-top: 6rem;
  height: 30rem;
}

#section-title {
  margin-left: 1rem;
  margin-bottom: 1rem;
  color: var(--clr-gray-9);
  max-width: 26ch;
}

.section-padding{
  padding-left: 20px;
}

.feature-img{
  display:block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}

.feature{
  flex: 0 0 31%;
  height: 15rem;
}

.feature-title{
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  color: white
}
</style>
