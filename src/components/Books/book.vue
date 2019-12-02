<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-success mb-3">
      <div class="card-header border-success border-light">
        <h3 class="card-title">
          {{ book.name }}
        </h3>
      </div>
      <div class="card-body">
        <div>By {{ book.author }}</div>
        <br />
        <img class="image-book" :src="book.image" />
        <br />
        <br />
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>

        <div class="pull-left">
          <button
            class="btn btn-success"
            @click="getBook"
            :disabled="quantity <= 0"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    getBook() {
      const order = {
        id: this.book.id,
        quantity: this.quantity
      };
      this.$store.dispatch("getBook", order);
      console.log("what is order", order);
      this.quantity = 0;
    }
  }
};
</script>
<style>
.image-book {
  min-height: 60%;
}
.form-control {
  width: 80%;
}
.btn-success {
  background-color: rgb(39, 38, 38);
  border-color: whitesmoke;
}
</style>
