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
          Welcome! I'm so happy you are here and are considering taking this
          courageous step forward!
        </p>
        <p>
          I provide authentic, compassionate, and evidence-based treatment for
          individuals and couples struggling with stress, issues with
          self-esteem, relationship difficulties, and mental health symptoms. I
          have nearly 10 years of specialized experience working with folks
          experiencing anxiety, PTSD, OCD, substance misuse, or chronic thoughts
          of suicide. I offer virtual psychotherapy to adults living in
          Washington or New York.
        </p>
        <ContactInfo />
      </div>
    </div>
  </GauzyBackground>
</template>

<script>
import GauzyBackground from "../components/GauzyBackground.vue";
import ContactInfo from "../components/ContactInfo.vue";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: { GauzyBackground, ContactInfo },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  font-family: "Alegreya Sans";
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
