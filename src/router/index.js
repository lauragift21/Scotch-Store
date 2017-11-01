import Vue from 'vue';
import Router from 'vue-router';

// moved from components to pages folder
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Index from '@/pages/admin/index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/admin',
      name: 'Admin',
      // Parent route still has a Component
      component: Index,

      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },

      ],
    },
  ],
});
