<template>
  <GauzyBackground :background="require('../assets/blurrySea.webp')">
    <div class="card">
      <q class="quote">Copy of page here</q>
    </div>
  </GauzyBackground>
</template>

<script>
import GauzyBackground from '../components/GauzyBackground.vue'

export default {
  name: 'Home',
  props: {
    msg: String,
  },
  components: { GauzyBackground },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 800px;
  height: 500px;
  background-color: var(--navbar-background);
  opacity: 0.9;
  border-radius: 3px;
  margin: 30px;
  padding: 30px;
  box-sizing: border-box;
}

.quote {
  font-family: Tahoma;
}
</style>
