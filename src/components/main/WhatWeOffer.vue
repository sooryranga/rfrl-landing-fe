<template>
  <div class="w-100" id="section">
    <h2 id="section-title">What do we offer</h2>
    <p id="section-description">
      We match employees with their future co-workers
    </p>
    <div class="wrapper-grid">
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
          <h5 class="feature-title">Choose Your Applicant to Refer</h5>
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

.wrapper-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 30%);
  justify-content: space-around;
}

#section{
  background-color: var(--clr-primary);
  padding-top: 4rem;
}

#section-title {
  color: white;
  max-width: 26ch;
  margin-left: 2rem;
  font-size: 2.4rem;
  font-weight: 400;
}

#section-description{
  color: white;
  margin-left: 2rem;
  margin-bottom: 3rem;
}

.feature-img{
  display:block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 5px solid white;
  box-shadow: 0 0 0 0.5rem rgba(256,256,256,0.1);
  border-radius: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}

.feature-title{
  text-align: center;
  margin-top: 2rem;
  color: white
}

@media (max-width: 653px) {
  .wrapper-grid {
    grid-template-columns: repeat(auto-fit, 90%);
  }
  .feature{
    margin-bottom: 1rem;
  }
}
</style>
