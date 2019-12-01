<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ book.name }}
        </h3>
      </div>
      <div class="panel-body">
        <div>By {{ book.author }}</div>
        <img :src="book.image" />
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="exchangeBook"
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
    exchangeBook() {
      const order = {
        bookId: this.book.id,
        quantity: this.quantity
      };
      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>
