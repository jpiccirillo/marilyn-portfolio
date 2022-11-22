<template>
  <GauzyBackground
    :background="require('../assets/sea.webp')"
    class="vertically-center"
  >
    <div class="card-image">
      <div class="card">
        <p>
          "Letting go gives us freedom, and freedom is the only condition for
          happiness.”
        </p>
        <p>― Thích Nhất Hạnh</p>
        <hr />
        <p>
          Welcome!
        </p>
        <p>
          I provide cognitive-behavioral therapy to adults living in Washington
          and New York. I use evidence-based approaches to help manage symptoms
          of trauma/PTSD, anxiety, OCD, chronic suicidality/self-harm, and
          substance misuse. My site provides more details about my approach and
          background and I am happy to talk with you in a 15-min consult to
          answer additional questions.
        </p>
        <ContactInfo class="center" />
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

.center {
  margin-left: auto;
  margin-right: auto;
  width: min-content;
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
