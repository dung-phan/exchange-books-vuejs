import Vue from "vue";
import Vuex from "vuex";
import books from "./books";
import book from "./book";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    books,
    book
  }
});
