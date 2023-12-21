<template>
  <div class="m-0 w-100" >
    <div id="hero-section">
      <div id="main-container" class="h-100 flex-container flex-item p-4">
        <div class="my-auto">
          <h1 id="title" class="my-auto">Land your dream job through referrals</h1>
          <h2 id="sub-title" class="my-auto">Employee Referrals are 4x more likely to be hired.
          <!-- eslint-disable-next-line vue/max-len -->
          <a class="no-style-link" href="https://www.linkedin.com/pulse/employee-referral-statistics-you-need-know-2020-mike-stafiej?trk=public_profile_article_view">
            <sup>1</sup>
          </a>
          </h2>
          <form class="form-inline">
            <input type="email" id="email" placeholder="Enter email" name="email" v-model="email">
            <button id="main-button" class="primary-btn primary-btn-dark" type="submit">
              <a class="no-style-link" :href="url">Start free trail</a>
            </button>
          </form>
        </div>
      </div>
      <div id="side-img" class="flex-item h-100">
        <img src="@/assets/pexels-cottonbro-4827576.jpg" class="h-100 w-100" style="object-fit: cover;"/>
      </div>
    </div>
    <div id="bottom-img">
      <img src="@/assets/pexels-cottonbro-4827576.jpg" class="h-100 w-100" style="object-fit: cover;"/>
    </div>
  </div>
</template>

<script>
import {getEmailSignUpURL} from '@/conf';

export default {
  data: function() {
    return {
      email: '',
    };
  },
  computed: {
    url() {
      return getEmailSignUpURL(this.email);
    },
  },
};
</script>

<style scoped>
#hero-section{
  margin-left: auto;
  margin-right: auto;
  height: 40rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#title {
  color: var(--clr-primary);
  max-width: 26ch;
  font-size: 3rem;
  font-weight: 400;
}

#sub-title{
  color: var(--clr-gray-4);
  max-width: 50ch;
  padding: 3px;
  font-size: 0.9rem;
  font-weight: 300;
}

.logo{
  font-family: 'Orbitron', sans-serif;
  color: var(--clr-gray-2);
  font-size: 4rem;
}


.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.form-inline label {
  margin: 5px 10px 5px 0;
}

.form-inline #email {
  vertical-align: middle;
  margin: 1rem 1rem 1rem 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid var(--clr-gray-3);
  border-radius: 0.5rem;
  flex-grow: 1;
  padding:0.8rem 1.5rem;
}

#main-button {
  padding-top:0.75rem;
  padding-bottom: 0.75rem;
  box-shadow:0 5px 15px 0 rgba(0,0,0,0.15);
}

.no-style-link {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}

.flex-item{
  flex: 1 1 50%;
}

#bottom-img{
  display: none;
}

@media (max-width: 800px) {
  .form-inline input {
    margin: 10px 0;
  }

  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }

  #side-img{
    display: none;
  }

  .form-inline #email {
    vertical-align: middle;
    margin: 1rem 0 1rem 0;
    padding: 10px;
    background-color: #fff;
    border: 1px solid var(--clr-gray-3);
    border-radius: 0.5rem;
    flex-grow: 1;
    padding:0.8rem 1.5rem;
  }

  #hero-section{
    height: 30rem;
  }

  #title {
    color: var(--clr-primary);
    max-width: 26ch;
    font-size: 2.5rem;
    font-weight: 400;
  }

  #bottom-img{
    max-height: 30rem;
    display: block;
  }

  #main-container{
    max-width: 30rem;
  }
}
</style>
