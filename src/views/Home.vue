<template>
  <GauzyBackground
    :background="require('../assets/blurrySea.webp')"
    class="vertically-center"
  >
    <div class="card-image">
      <div class="card vertically-center">
        <p>
          Hi, I'm Marilyn, and I'm go glad you're here.
          <br />
          <br />
          I use radically empathatic evidence-based approaches to help adults
          recover from trauma/PTSD, manage symptoms of anxiety, OCD, chronic
          suicidality and forms of self-harm and substance misuse.
        </p>
      </div>
      <img src="../assets/headshot.jpg" class="headshot" />
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
.card {
  height: 100%;
  background-color: var(--navbar-background);
  opacity: 0.9;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px 0px 0px 20px;
  align-items: center;
  &.vertically-center {
    display: grid;
  }
}

.headshot {
  border-radius: 0px 20px 20px 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-image {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  width: 80%;
  max-width: 800px;
}

@media screen and (max-width: 500px) {
  .card-image {
    display: grid;
    grid-template-columns: 1fr;
    margin: 10px;
  }
  .card {
    border-radius: 20px 20px 0px 0px;
    padding: 15px;
  }

  .headshot {
    border-radius: 0px 0px 20px 20px;
  }
}
</style>
