const state = {
  number: 0,
  books: []
};

const mutations = {
  GET_BOOK(state, { id, quantity }) {
    const record = state.books.find(book => book.id == id);
    if (record) {
      record.quantity += quantity;
    } else {
      state.books.push({
        id: id,
        quantity: quantity
      });
    }
    state.number -= quantity;
  },
  GIVE_BOOK(state, { id, quantity }) {
    const record = state.books.find(book => book.id == id);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.books.splice(state.books.indexOf(record), 1);
    }
    state.number += quantity;
  }
};
const actions = {
  giveBook({ commit }, order) {
    commit("GIVE_BOOK", order);
  }
};
const getters = {
  yourAccount(state, getters) {
    return state.books.map(book => {
      const record = getters.books.find(element => element.id == book.id);
      return {
        id: book.id,
        quantity: book.quantity,
        name: record.name
      };
    });
  },
  number(state) {
    return state.number;
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
