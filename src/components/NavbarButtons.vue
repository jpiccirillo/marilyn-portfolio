<template>
  <ul class="navbar-buttons">
    <li><router-link to="home">Home</router-link></li>
    <li><router-link to="about-me">About Me</router-link></li>
    <li><router-link to="faq">FAQ</router-link></li>
    <li><router-link to="contact">Contact</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  font-family: 'Sono';
  color: var(--font-black);
}

.navbar-buttons {
  display: flex;
  margin-left: auto;
  margin-right: 30px;
}

ul > li {
  display: inline-block;
  &:not(:first-child) {
    margin-left: 20px;
  }
  /* You can also add some margins here to make it look prettier */
}
</style>
