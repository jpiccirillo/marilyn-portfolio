<template>
  <GauzyBackground :background="require('../assets/skyline.webp')">
    <div class="grid custom-grid">
      <div class="card a">
        <h1>Let's talk!</h1>
        <p>
        </p>
        <p>
          I provide a 20-minute phone consultation to answer questions about logistics and disucss my
          approach to therapy. A phone consultation can very helpful in learning more about each other and how we might work together. 
        <p>
         Please reach out, I'd love to hear from you!
        </p>
        <ContactInfo />
      </div>
    </div>
  </GauzyBackground>
</template>

<script>
import GauzyBackground from '../components/GauzyBackground.vue'
import ContactInfo from '../components/ContactInfo.vue'

export default {
  name: 'Contact',
  components: { GauzyBackground, ContactInfo },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.custom-grid {
  margin-top: 30px;
}

.monospace {
  font-size: 12pt;
  word-break: break-all;
  font-family: monospace;
}

@import '../assets/gridStyle.scss';
</style>
