import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory('/'),
    routes: [
      {
        path: '',
        name: 'Default Layout',
        component: () => import('@/layouts/DefaultLayout.vue'),
        children: [
            {
                path: '',
                name: 'User Home',
                component: () => import('@/views/users/index.vue'),
            },
            {
                path: 'create-user',
                name: 'Create User',
                component: () => import('@/views/users/CreateUser.vue'),
            },
        ]
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      }
    ],
  });
export default router;