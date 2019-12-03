<template>
  <div>
    <h3>Your cart</h3>
    <app-book v-for="book in books" :key="book.id" :book="book"></app-book>
    <a href="#" class="btn btn-success" @click="saveData" role="button">Save</a>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Book from "./book";
export default {
  computed: {
    ...mapGetters({
      books: "myAccount"
    })
  },
  components: {
    appBook: Book
  },
  methods: {
    saveData() {
      const data = {
        cart: this.$store.getters.cart,
        myAccount: this.$store.getters.myAccount,
        books: this.$store.getters.books
      };
      console.log("what is data", data);
      this.$http.put("data.json", data);
    }
  }
};
</script>
