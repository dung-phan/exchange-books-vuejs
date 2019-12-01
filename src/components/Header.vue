<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="background-color: #e3f2fd;"
  >
    <router-link to="/" class="navbar-brand">Book exchange</router-link>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/list" activeClass="active" tag="li">
          <a>Book List</a></router-link
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
