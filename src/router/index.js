import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/components/main/Main.vue'),
  },
  {
    path: '/want-referral',
    component: () => import('@/components/StudentLandingPage.vue'),
  },
  {
    path: '/terms-of-service',
    component: () => import('@/components/TermsOfService.vue'),
  },
  {
    path: '/privacy-policy',
    component: () => import('@/components/PrivacyPolicy.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
