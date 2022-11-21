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
        <div class="contact-options">
          <div>
            <a
              class="monospace"
              :href="`mailto:${email}?subject=${subject}&body=${body}`"
            >
              {{ email }}
            </a>
          </div>
          <div>(646) 481-0715</div>
        </div>
      </div>
    </div>
  </GauzyBackground>
</template>

<script>
import GauzyBackground from '../components/GauzyBackground.vue'

export default {
  name: 'Contact',
  components: { GauzyBackground },
  data() {
    return {
      email: 'drmarilynpiccirillo@gmail.com',
      subject: 'Interest in Phone Consult',
      body:
        'Hi, I am interested in a 15 minute phone consultation to discuss...',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact-options {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 10px;
}

.custom-grid {
  margin-top: 30px;
}

.monospace {
  font-size: 12pt;
  word-break: break-all;
  font-family: monospace;
}

@import '../assets/cardStyle.scss';
</style>
