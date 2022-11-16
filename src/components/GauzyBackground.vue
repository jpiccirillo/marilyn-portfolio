<template>
  <div class="page-container">
    <div class="background-container">
      <div class="background" :style="style"></div>
      <div class="overlay"></div>
      <div class="card-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GauzyBackground',
  props: ['background'],
  computed: {
    style() {
      return {
        background: `url(${this.background}) no-repeat center center fixed`,
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-container,
.background-container,
.card-container {
  height: 100%;
  width: 100%;
}

.background,
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
}

.background {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.background-container {
  display: grid;
}

.overlay {
  background-color: white;
  opacity: 0.3;
}

.overlay,
.background,
.card-container {
  grid-row-start: 1;
  grid-column-start: 1;
}

.card-container {
  display: grid;
  justify-items: center;
  max-width: 100vw;
}
</style>
