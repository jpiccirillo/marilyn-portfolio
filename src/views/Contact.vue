<template>
  <GauzyBackground :background="require('../assets/skyline.webp')">
    <div class="grid custom-grid">
      <div class="card a">
        <h1>Get in Touch</h1>
        <p>
          I work with adults living in Washington state or New York. All
          services are provided virtually using a secure telehealth platform.
        </p>
        <p>
          I provide a 20-minute phone consultation to answer questions about my
          services. This phone consultation can also be helpful in determining
          fit for our potential to work together.
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
