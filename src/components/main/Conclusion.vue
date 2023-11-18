<template>
  <div class="w-100 section flex-container">
    <div class="my-auto w-100">
      <h1 id="title">Accelerate your career with <span class="logo-text black-color">rfrl</span></h1>
      <p>Get referral to your dream job and excell in life</p>
      <button>Start free trial</button>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.black-color{
  color: var(--clr-gray-2);
}

.logo-text:hover{
  color: var(--clr-gray-2);
}

.section{
  text-align: center;
  height: 25rem;
}
#title{
  color: var(--clr-gray-2);
}

button {
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

button:hover {
  background-color: var(--clr-primary);
}
</style>
