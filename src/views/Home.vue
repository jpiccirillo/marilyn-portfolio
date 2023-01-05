<template>
  <GauzyBackground
    :background="require('../assets/sea.webp')"
    class="vertically-center"
  >
    <div class="card-image">
      <div class="card">
        <p class="quote">
          "Letting go gives us freedom, and freedom is the only condition for
          happiness.”
        </p>
        <p>― Thích Nhất Hạnh</p>
        <hr />
        <p>
          I am a clinical psychologist providing teletherapy to adults living
          in Washington and New York. I specialize in using cognitive-behavioral approaches to help adults recover from
          trauma/PTSD, anxiety and mood symptoms, and OCD. I am also skilled in understanding and managing chronic thoughts of death, suicide, or self-harm, as well as substance misuse,
          using dialectical behavioral therapy.
          My approach to therapy is compassionate and authentic and I strive to
          bring a refreshing sense of realism, balance, and joy into your
          journey towards better health.
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
  name: 'Home',
  props: {
    msg: String,
  },
  components: { GauzyBackground, ContactInfo },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  font-family: 'Alegreya Sans';
  font-size: 14pt;
}

.card {
  height: 100%;
  align-items: center;
}

.card-image {
  display: grid;
  justify-content: center;
  width: 80%;
  max-width: 800px;
  margin: 30px;
}

.quote {
  font-style: oblique;
}

@media screen and (max-width: 500px) {
  .card-image {
    margin: 20px;
  }
  .card {
    padding: 15px;
  }
}
</style>
