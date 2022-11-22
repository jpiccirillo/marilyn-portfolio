<template>
  <nav class="navbar">
    <div class="banner">
      <h1>Marilyn Piccirillo, PhD</h1>
      <h2 class="oblique">Clinical Psychologist</h2>
    </div>
    <NavbarButtons class="large-width-menu" />
    <Hamburger class="small-width-menu" />
  </nav>
</template>

<script>
import Hamburger from './Hamburger'
import NavbarButtons from './NavbarButtons'

export default {
  name: 'Navbar',
  components: {
    NavbarButtons,
    Hamburger,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  font-family: 'Alegreya Sans';
  color: black;
}
.navbar {
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  background-color: var(--navbar-background);
  border-bottom: 2px solid var(--navbar-border);
  width: 100%; /* Full width */
  position: fixed;
  z-index: 10;
}

.banner {
  padding: 20px;
  text-align: left;
}

h1,
h2 {
  margin-top: 0px;
  margin-bottom: 0px;
}

h1 {
  font-size: 15pt;
  margin-bottom: 5px;
}

h2 {
  font-size: 14pt;
}
h1,
h2,
h3 {
  text-transform: uppercase;
}

.small-width-menu {
  display: none;
}

@media screen and (max-width: 700px) {
  h1 {
    font-size: 13pt;
  }
  h2 {
    font-size: 13pt;
  }
  .small-width-menu {
    display: block;
  }
  .large-width-menu {
    display: none;
  }
}
</style>
