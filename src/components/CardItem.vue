<template>
  <div class="card">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.card {
  --card-bg-clr: white;
  --card-shdw-clr: var(--clr-gray-7);
  --card-button-clr: white;
  --card-button-bg-clr: var(--clr-primary);
  --card-button-bg-hover-clr: var(--clr-primary-darker);

  background-color: transparent;
  color: white;
  position: relative;
  margin: 0.5rem;
  border: none;
  margin-top: 3.5rem;
}

.profile-img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  object-position: center;
}

.card-body {
  font-size: 0.9rem;
}
</style>
