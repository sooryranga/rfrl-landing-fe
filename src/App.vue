<template>
  <div id="app">
    <div id="main">
      <nav ref="nav" id="topbar" class="
        align-items-center p-1
        text-center
      ">
        <div class="container-xl nav-container">
          <div id="logo">
            <router-link to="/" class="logo-text">rfrl</router-link>
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
      <div class="scrolable-full w-100 flex-item-grow">
        <div id="content" class="w-100 h-100">
          <router-view id="content-view" :key="routerViewKey"/>
          <main-footer/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from '@/components/NavLink.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'App',
  components: {NavLink, MainFooter},
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
@import './css/button.css';

body{
  background-color: #f2f7f285;
}

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
  background-color: var(--clr-primary);
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

#logo{
  margin-left: 1rem;
}

.logo-text{
  font-size: 2.5rem;
  text-decoration:none;
  color: white;
  font-weight: 400;
}
.logo-text:hover{
  color: white;
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

#content{
  display:flex;
  flex-direction:column;
  flex-wrap: nowrap;
  overflow-y: auto;
}

#content-view{
  flex:1 0;
}

.drop-down-router-links {
  display: none;
}

@media (max-width: 653px) {
  .nav-links {
    display: none;
  }
  .drop-down-router-links {
    display: block;
  }
}
</style>
