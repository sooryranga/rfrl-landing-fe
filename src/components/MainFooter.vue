<template>
  <div id="footer">
    <div class="nav-links-container">
      <div class="nav-links">
        <router-link to="/terms-of-service"
          v-slot="{href, navigate, isActive}"
        >
          <nav-link :navigate="navigate" v-bind:href="href" :active="isActive" :withLine="false">
            Terms Of Service
          </nav-link>
        </router-link>
      </div>
      <div class="nav-links">
        <router-link to="/privacy-policy"
            v-slot="{href, navigate, isActive}"
          >
          <nav-link :navigate="navigate" v-bind:href="href" :active="isActive" :withLine="false">
            Privacy Policy
          </nav-link>
        </router-link>
      </div>
    </div>
    <div id="policy" class="flex-item">
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
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 2rem;
}

.flex-item{
  flex:0 0 50%;
}

.nav-links-container {
  display: flex;
  justify-content: flex-end;
}

.nav-links {
  margin-left: 2rem;
  margin-right: 2rem;
  padding-top: 0.1rem;
  padding-bottom:0.1rem;
  font-size: 0.8rem;
  vertical-align: middle;
}

</style>
