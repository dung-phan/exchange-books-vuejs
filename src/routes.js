import Home from "./components/Home.vue";
import BookList from "./components/BookList.vue";
import YourAccount from "./components/YourAccount.vue";
export const routes = [
  { path: "/", component: Home },
  { path: "/list", component: BookList },
  { path: "/account", component: YourAccount }
];
