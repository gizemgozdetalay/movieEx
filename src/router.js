import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register";
import MovieSearch from "./views/MovieSearch";
import Deneme from "./views/Deneme";
import MovieDetail from "./components/MovieDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/movies",
      name: "movies",
      component: MovieSearch
    },
    {
      path: "/deneme",
      name: "deneme",
      component: Deneme
    },
    {
      path: "/movies/:id",
      name: "Movie",
      props: true,
      component: MovieDetail
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
