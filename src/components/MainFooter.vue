<template>
  <div id="footer">
    <div class="nav-links-container">
      <nav-link>
        <div class="nav-links">
          <router-link to="/terms-of-service"
            v-slot="{href, navigate, isActive}"
          >
            <nav-link :navigate="navigate" :href="href" :active="isActive" :withLine="false">
              Terms Of Service
            </nav-link>
          </router-link>
        </div>
      </nav-link>
      <nav-link>Privacy Policy</nav-link>
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
  height: 3rem;
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
  vertical-align: middle;
}

</style>
