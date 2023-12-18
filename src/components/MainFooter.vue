<template>
  <div id="footer">
    <div class="nav-links-container">
      <div class="footer-links">
        <router-link to="/terms-of-service"
          v-slot="{href, navigate, isActive}"
        >
          <nav-link :navigate="navigate" v-bind:href="href" :active="isActive" :withLine="false">
            Terms of Service
          </nav-link>
        </router-link>
      </div>
      <div class="footer-links">
        <router-link to="/privacy-policy"
            v-slot="{href, navigate, isActive}"
          >
          <nav-link :navigate="navigate" v-bind:href="href" :active="isActive" :withLine="false">
            Privacy Policy
          </nav-link>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from '@/components/NavLink.vue';

export default {
  name: 'App',
  components: {NavLink},
};
</script>

<style scoped>
#footer{
  background-color: var(--clr-primary);
  flex: 0 0 2rem;
}

.nav-links-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height:100%;
  justify-content: flex-end;
}

.footer-links {
  font-size: 0.8rem;
  margin-right: 2rem;
  vertical-align: middle;
}


@media (max-width: 653px) {
  .nav-links-container{
    display: flex;
    flex-direction: row;
    width: 100%;
    height:100%;
    justify-content: space-evenly;
  }
  .footer-links{
    font-size: 0.8rem;
    vertical-align: middle;
    margin-right: 0;
  }
}
</style>
