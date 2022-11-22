import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'login',name:'loginPage', component: () => import('pages/Auth/LoginPage.vue') },
      { path: 'register',name:'registerPage', component: () => import('pages/Auth/RegisterPage.vue') },
      { path: 'renew-password',name:'renewPasswordPage', component: () => import('pages/Auth/RenewPasswordPage.vue') },
      { path: 'opt-verification',name:'optVerificationPage', component: () => import('pages/Auth/OptPasswordVerification.vue') },
      { path: 'success',name:'optVerificationSuccessPage', component: () => import('pages/Auth/VerificationSuccess.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
