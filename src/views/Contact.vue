<template>
  <GauzyBackground :background="require('../assets/skyline.webp')">
    <div class="grid custom-grid">
      <div class="card a">
        <h1>Get in Touch</h1>
        <p>
          I am licensed to provide psychology services to adults living in
          Washington state and New York. All services are provided virtually
          using secure online videoconferencing platforms.
        </p>
        <p>
          I provide a 15-minute phone consultation to answer questions about my
          services. This phone consultation can also be helpful in determining
          fit for our potential to work together.
        </p>
      </div>
      <div class="card b">
        <h1>Email</h1>
        <p class="monospace">drmarilynpiccirillo@gmail.com</p>
      </div>
      <div class="card c">
        <h1>Google Voice</h1>
        <p class="monospace">
          (646) 481-0715
        </p>
      </div>
    </div>
  </GauzyBackground>
</template>

<script>
import GauzyBackground from '../components/GauzyBackground.vue'

export default {
  name: 'Contact',
  components: { GauzyBackground },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/cardStyle.scss';

.custom-grid {
  display: grid;
  grid-template-areas: 'a a' 'b c';
  margin-top: 30px;
}

.monospace {
  font-size: 12pt;
  word-break: break-all;
  font-family: monospace;
}
.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
</style>
