<template>
  <div id="app">
    <nav>
      <router-link to="/">About me</router-link> |
      <router-link to="/about">Interests</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #07383a;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #333333;

    &.router-link-exact-active {
      color: #333333;
    }
  }
}
</style>
