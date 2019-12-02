<template>
  <div>
    <h3>Your cart</h3>
    <app-book v-for="book in books" :key="book.id" :book="book"> </app-book>
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
  }
};
</script>
