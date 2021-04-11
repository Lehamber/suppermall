import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Profile = () => import('views/profile/Profile');
const Shopcart = () => import('views/shopcart/Shopcart');
const Detail = () => import('views/detail/Detail');

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/detail/:iid',
      name: 'detail',
      component: Detail
    }
  ],
  mode: 'history' 
});