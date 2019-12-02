const state = {
  cart: 0,
  books: []
};

const mutations = {
  GET_BOOK(state, { id, quantity }) {
    console.log("What in state", state.books);
    const record = state.books.find(element => element.id == id);
    if (record) {
      record.quantity += quantity;
    } else {
      state.books.push({
        id: id,
        quantity: quantity
      });
    }
    console.log("what is state", state);

    console.log("what is record", record);

    state.cart -= quantity;
  },
  GIVE_BOOK(state, { id, quantity }) {
    const record = state.books.find(element => element.id == id);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.books.splice(state.books.indexOf(record), 1);
    }
    state.cart += quantity;
  }
};
const actions = {
  giveBook({ commit }, order) {
    commit("GIVE_BOOK", order);
  }
};
const getters = {
  myAccount(state, getters) {
    return state.books.map(book => {
      const record = getters.books.find(element => element.id == book.id);
      console.log("what is record in my account", record);
      return {
        id: book.id,
        quantity: book.quantity,
        name: record.name
      };
    });
  },
  cart(state) {
    return state.cart;
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
