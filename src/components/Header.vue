<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">HOME</router-link>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/list" activeClass="active" tag="li">
          <a>BOOK LIST</a></router-link
        >
        <router-link to="/account" activeClass="active" tag="li">
          <a>Your account</a></router-link
        >

        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style>
a {
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
