<template>
  <div id="app">
    <div class="filler"></div>
    <Navbar />
    <router-view id="router" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
}
</script>

<style lang="scss">
:root {
  --font-black: black;
  --navbar-background: aliceblue;
  --navbar-border: #b3cee6;
}

html,
body,
#app,
#router {
  height: 100%;
  width: 100%;
}

#router {
  overflow: scroll;
  &.change {
    z-index: -10;
  }
}

html {
  overflow: scroll;
}

body {
  margin: 0px;
}

h1,
h2,
h3 {
  font-weight: 400;
  margin: 0px;
  font-family: 'Sono';
}

#app {
  font-family: 'Public Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
  grid-template-rows: 85px auto;
}

.oblique {
  font-style: oblique;
}
</style>
