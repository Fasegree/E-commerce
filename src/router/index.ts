import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Counter from "../components/Counter.vue";
import LoginPage from "@/views/LoginPage.vue";
import HomePage from "@/views/HomePage.vue";
import NotFound404Page from "@/views/NotFound404Page.vue";
import ProductCardDetiles from "@/components/productCard/ProductCardDetiles.vue";
import CartPage from "@/views/CartPage.vue";

const routes = [
  {
    path: "/login",
    name: "Auth",
    component: LoginPage,
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: { requiresAuth: false },
  },
  {
    path: "/product/:id",
    name: "ProductCardDetiles",
    component: ProductCardDetiles,
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
    meta: { requiresAuth: false },
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => NotFound404Page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    unsubscribe();

    if (requiresAuth && !user) {
      next("/");
    } else {
      next();
    }
  });
});

export default router;
