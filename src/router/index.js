import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Blog from "../views/Blog";
import BlogDetails from "../views/BlogDetails";
import Contact from "../views/Contact";
import EventDetails from "../views/EventDetails";
import Events from "../views/Events";
import Home from "../views/Home";
import Hotel from "../views/Hotels";
import HotelDetails from "../views/HotelDetails";
import Tickets from "../views/Tickets";
import Checkout from "../views/Checkout";
import Login from "../views/Login"
import store from "../store/module/Loginmodule/login"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
  },
  {
    path: "/events",
    name: "events",
    component: Events,
  },
  {
    path: "/events/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
  },
  {
    path: "/hotels",
    name: "hotels",
    component: Hotel,
  },
  {
    path: "/hotels/:id",
    name: "HotelDetails",
    component: HotelDetails,
    props: true,
  },
  {
    path: "/blogs",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blogs/:id",
    name: "BlogDetails",
    component: BlogDetails,
    props: true,
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) {
        next({ name: 'Login' });
      }
      else {
        next();
      }
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
