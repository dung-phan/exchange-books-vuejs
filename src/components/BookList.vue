<template>
  <div>
    <app-book v-for="book in books" :key="book.id"> </app-book>
  </div>
</template>
<script>
import Books from "./YourAccount";
export default {
  data() {
    return {
      books: [
        {
          id: 1,
          name: "Flow: The Psychology of Optimal Experience",
          image:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432253110l/66354._SY475_.jpg",
          author: "Viktor Frankl"
        },
        {
          id: 2,
          name: "Man's Search for Meaning",
          image:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535419394l/4069._SY475_.jpg",
          author: "Mihaly Csikszentmihalyi"
        },
        {
          id: 3,
          name:
            "David and Goliath: Underdogs, Misfits, and the Art of Battling Giants",
          image:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391813567l/15751404.jpg",
          author: "Malcolm Gladwell"
        },
        {
          id: 4,
          name: "Down and Out in Paris and London",
          image:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347697665l/393199.jpg",
          author: " George Orwell"
        },
        {
          id: 5,
          name: "Antifragile: Things That Gain from Disorder",
          image:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1352422827l/13530973.jpg",
          author: "Nassim Nicholas Taleb"
        },
        {
          id: 6,
          name: "Essays and Aphorisms",
          image:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525006676l/19510._SY475_.jpg",
          author: "Arthur Schopenhauer"
        },
        {
          id: 7,
          name: "Letters from a Stoic",
          image:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421619214l/97411.jpg",
          author: "Seneca"
        }
      ]
    };
  },
  components: {
    appBook: Books
  }
};
</script>
