<template>
  <div class="row m-0 w-100" id="hero-section">
    <div class="col h-100 flex-container">
      <div class="my-auto">
        <h1 id="title" class="my-auto">Land your dream job through referrals</h1>
        <form class="form-inline" action="/action_page.php">
          <input type="email" id="email" placeholder="Enter email" name="email">
          <button id="main-button" class="primary-btn primary-btn-dark" type="submit">
            Start free trail
          </button>
        </form>
      </div>
    </div>
    <div class="col h-100">
      <img src="@/assets/pexels-cottonbro-4827576.jpg" class="h-100 w-100" style="object-fit: cover;"/>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
#hero-section{
  margin-left: auto;
  margin-right: auto;
  height: 40rem;
}

#title {
  color: var(--clr-primary);
  max-width: 26ch;
  font-size: 3rem;
  font-weight: 400;
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

@media (max-width: 800px) {
  .form-inline input {
    margin: 10px 0;
  }

  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
