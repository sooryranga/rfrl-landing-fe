<template>
  <div class="w-100" id="section">
    <h2 id="section-title">Why should you refer</h2>
    <p id="section-description">
      You can earn compensation and provide value to your company
    </p>
    <div class="wrapper-grid">
      <card-item>
        <h5 class="benefit-name">Hourly Compensation</h5>
        <p>
          You can talk to clients directly to figure
          out the rate for tutoring and validating
          the client for the job
        </p>
      </card-item>
      <card-item>
        <h5 class="benefit-name">Referral Bonuses</h5>
        <p>
          Most companies give out fair bonus for finding talent
        </p>
      </card-item>
      <card-item>
        <h5 class="benefit-name">Pick and choose your co-workers</h5>
        <p>
          You spend more time at work than with your family
          so having the ability to pick and choose y
          our co-worker is highly valuable
        </p>
      </card-item>
      <card-item>
        <h5 class="benefit-name">On your discretion</h5>
        <p>
          You decide whether you want to refer someone or not.
        </p>
      </card-item>
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue';
export default {
  components: {CardItem},
  data() {
    return {
      img: require('@/assets/pexels-christina-morillo-1181275.jpg'),
    };
  },
};
</script>

<style scoped>
.flex-container{
  display:flex;
}

#section{
  background-color: var(--clr-primary);
  padding-top: 4rem;
}

#section-title {
  margin-bottom: 1rem;
  color: white;
  max-width: 26ch;
  margin-left: 2rem;
  font-size: 2.4rem;
  font-weight: 400;
}

#section-description{
  color: white;
  margin-left: 2rem;
  margin-right: 2rem;
}

.wrapper-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 18rem);
  justify-content: space-between;
  text-align: center;
}

@media (max-width: 574px) {
  .wrapper-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100%);
    justify-content: space-between;
    text-align: center;
  }
}
</style>
