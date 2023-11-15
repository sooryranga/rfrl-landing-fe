<template>
  <div id="app">
    <div id="main">
      <nav ref="nav" id="topbar" class="
        align-items-center p-1
        text-center
      ">
        <div class="container-lg nav-container">
          <div id="logo">
            <router-link to="/" id="logo-text">rfrl</router-link>
          </div>
          <div class="nav-links-with-profile">
            <div class="nav-links">
              <router-link to="/chat"
                v-slot="{href, navigate, isActive}"
              >
                <nav-link :navigate="navigate" v-bind:href="href" :active="isActive">
                  Login
                </nav-link>
              </router-link>
            </div>
            <div class="align-items-center">
              <router-link class="btn btn-light mr-2" to="/signup">Sign Up</router-link>
            </div>
          </div>
        </div>
      </nav>
      <div id="content" class="w-100 flex-item-grow">
        <router-view :key="routerViewKey"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from '@/components/NavLink.vue';

export default {
  name: 'App',
  components: {NavLink},
  computed: {
    routerViewKey() {
      return this.$route.fullPath.split('/').slice(0, 2).join('/');
    },
  },
};
</script>

<style>
@import './css/color.css';
@import './css/tooltip.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  height:100vh;
  color: #2c3e50;
}

#topbar{
  background-color: var(--clr-primary-dark);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 5vh;
    margin: 0 auto;
}

.nav-links-with-profile {
  display: flex;
  justify-content: flex-end;
  width:3rem;
  flex: 1;
  vertical-align: middle;
}

.nav-links {
  margin-right: 2rem;
  vertical-align: middle;
}

.primary-color{
  color: var(--clr-primary)
}

#logo {
  margin-left: 1rem;
}

#logo-text{
  letter-spacing: 2px;
  font-size: 2.5rem;
  text-decoration:none;
  color: white;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
}

.to-right{
  margin-left: auto;
}

.sticky-top{
  z-index:4
}
#navProfilePicture{
  width: 2rem;
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
}
#main{
  flex-direction: column;
  display:flex;
  height:100%;
  flex-wrap: nowrap;
}
.flex-item-grow{
  flex: 1;
  min-height: 0; /* new */
}

.drop-down-router-links {
  display: none;
}

@media only screen and (max-width: 653px) {
  .nav-links {
    display: none;
  }
  .drop-down-router-links {
    display: block;
  }
}
</style>
