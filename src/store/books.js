import books from "../data";
const state = {
  books: []
};
const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  }
};
const actions = {
  getBook: ({ commit }) => {
    commit();
  },
  setBooks: ({ commit }) => {
    commit("SET_BOOKS", books);
  }
};
const getters = {
  books: state => {
    return state.books;
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
