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
          Marilyn Portfolio :: Set up Contact Me page Scheduled: Nov 19, 2022 at
          9:30 PM to 10:15 PM Location: 1220 Gooseberry Ln Chesterfield, MO,
          United States
        </p>
      </div>
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
}

@media screen and (max-width: 500px) {
  .card-image {
    margin: 10px;
  }
  .card {
    padding: 15px;
  }
}
</style>
