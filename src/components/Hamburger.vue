<template>
  <div>
    <div id="menu">
      <div id="x" @click="menuOnClick">
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
        <div id="bar3" class="bar"></div>
      </div>
      <nav class="nav" id="nav">
        <ul class="navbar-buttons">
          <li><router-link to="home">Home</router-link></li>
          <li><router-link to="about-me">About Me</router-link></li>
          <li><router-link to="faq">FAQ</router-link></li>
          <li><router-link to="contact">Contact</router-link></li>
        </ul>
      </nav>
      <div class="menu-bg" id="menu-bg"></div>
    </div>
  </div>
</template>

<script>
import { toggleSidebar } from '../services/sidebar'

export default {
  name: 'Navbar',
  methods: {
    menuOnClick() {
      toggleSidebar()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#menu {
  display: grid;
  // overflow: hidden;
  height: calc(100% - 50px);
  padding-bottom: 50px;
  padding-left: 50px;
  grid-template-rows: min-content min-content;
  z-index: 2;
}

.nav,
#x {
  z-index: 10;
}

#x {
  width: 25px;
  height: 40px;
  margin: 35px 0 20px 20px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 22px;
}

.bar {
  height: 4px;
  width: 100%;
  background-color: var(--navbar-border);
  display: block;
  border-radius: 5px;
  transition: 0.3s ease;
}

#bar1 {
  transform: translateY(-4px);
}

#bar3 {
  transform: translateY(4px);
}

.nav {
  transition: 0.8s ease;
  display: none;
}

.nav ul {
  margin-top: 0px;
  padding: 0 22px;
}

.nav li {
  list-style: none;
  padding: 12px 0;
}

.nav li a {
  color: var(--font-black);
  font-size: 20px;
  text-decoration: none;
}

.nav li a:hover {
  font-weight: bold;
}

.menu-bg,
#menu {
  top: 0;
  right: 0;
  position: absolute;
}

.menu-bg {
  width: 0;
  height: 0;
  margin: 30px 0 20px 20px;
  background: radial-gradient(
    circle,
    var(--navbar-border),
    var(--navbar-border)
  );
  border-radius: 50%;
}

.change {
  transition: 0.3s linear;
  display: block;
}

.change-bg {
  width: 520px;
  height: 460px;
  transform: translate(65%, -25%);
}

.navbar-buttons {
  text-align: right;
}
// Make the white X
.change .bar {
  background-color: var(--font-black);
}

.change #bar1 {
  transform: translateY(4px) rotateZ(-45deg);
}

.change #bar2 {
  opacity: 0;
}

.change #bar3 {
  transform: translateY(-4px) rotateZ(45deg);
}
</style>
