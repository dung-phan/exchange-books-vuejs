<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <img src="../assets/planet-2.svg" width="30" height="30" alt />
    </router-link>
    <ul class="nav navbar-nav">
      <router-link to="/list" activeClass="active" tag="li">
        <a>BOOK LIST</a>
      </router-link>
      <router-link to="/account" activeClass="active" tag="li">
        <a>Your account</a>
      </router-link>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <p style="color:white">
          <img src="../assets/cart-plus-solid.svg" width="20" height="20" alt />
          Cart: {{ cart }}
        </p>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      dropDown: false
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    }
  }
};
</script>
<style>
a,
p {
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: hsla(0, 0%, 100%, 0.3);
  display: flex;
  height: 100%;
  padding-right: 0px;
  cursor: pointer;
  align-items: center;
}
nav {
  background-color: transparent;
  font-weight: 100;
}
</style>
