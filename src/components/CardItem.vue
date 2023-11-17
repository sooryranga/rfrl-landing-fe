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
  --card-bg-clr: var(--clr-gray-9);
  --card-shdw-clr: var(--clr-gray-7);
  --card-button-clr: var(--clr-gray-9);
  --card-button-bg-clr: var(--clr-primary-light);
  --card-button-bg-hover-clr: var(--clr-primary-dark);

  background-color: transparent;
  color: var(--clr-gray-9);
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
  margin-left: 1rem;
}
</style>
