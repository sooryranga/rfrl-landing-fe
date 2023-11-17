<template>
  <div class="row w-100" id="hero-section">
    <div class="col h-100 flex-container">
      <div class="my-auto">
        <h1 id="title" class="my-auto">Land your dream job through referrals</h1>
        <form class="form-inline" action="/action_page.php">
          <input type="email" id="email" placeholder="Enter email" name="email">
          <button type="submit">Start free trail</button>
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
  background-color: var(--khaki-web);
  margin-left: auto;
  margin-right: auto;
  height: 33rem;
}

#title {
  color: var(--clr-primary);
  max-width: 26ch;
  font-weight: 800;
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
  border: 1px solid var(--clr-gray-4);
  border-radius: 0.5rem;
  flex-grow: 1;
  padding:0.8rem 1.5rem;
}

.form-inline #email:focus {
  border: 1px solid var(--clr-primary);
  outline: 1px solid var(--clr-primary);
}

.form-inline button {
  padding:1rem 1.8125rem;
  border-radius:4px;
  font-weight:700;
  font-size:1rem;
  line-height:1.133;
  transition:150ms ease;
  transition-property:background-color, border-color, box-shadow, color;
  text-align:center;
  -webkit-user-select:none;
  user-select:none;
  -webkit-appearance:none;
  appearance:none;
  cursor:pointer;
  box-shadow:0 5px 15px 0 rgba(0,0,0,0.15);
  background-color: var(--clr-primary-lightest);
  color:#ffffff;
  border-width:1px;
  border-style:solid;
  border-color:transparent
}

.form-inline button:hover {
  background-color: var(--clr-primary);
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
