import Home from "./components/Home.vue";
import books from "./components/Books/books";
import MyAccount from "./components/MyAccount/myAccount";
export const routes = [
  { path: "/", component: Home },
  { path: "/list", component: books },
  { path: "/account", component: MyAccount }
];
