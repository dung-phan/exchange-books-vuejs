<template>
  <div>
    <app-book v-for="book in books" :key="book.id" :book="book"> </app-book>
  </div>
</template>
<script>
import Books from "./YourAccount";
export default {
  components: {
    appBook: Books
  },
  computed: {
    books() {
      return this.$store.getters.books;
    }
  }
};
</script>
<style>
img {
  width: 45%;
}
</style>
