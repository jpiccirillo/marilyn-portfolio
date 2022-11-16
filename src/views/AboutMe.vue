<template>
  <GauzyBackground :background="require('../assets/blurrySea.webp')">
    <div class="grid">
      <div class="card">
        <h1>About Me</h1>
        <p>
          I am a clinical psychologist and provide psychotherapy to adults
          living in Washington and New York. I have nearly 10 years of
          experience using time-limited behavior therapies to help adults
          recover from trauma/PTSD and manage symptoms of anxiety, OCD, chronic
          suicidality and forms of self-harm, including substance misuse. I
          adapt evidence-based treatments to fit individual needs and will guide
          you in learning skills to cope with uncomfortable and distressing
          emotions. My primary goal is to support you in feeling more confident
          taking on life's challenges.
        </p>
        <p>
          As a human and therapist, I strive to be radically genuine. That means
          that I prioritize being direct, honest, and compassionate. I am
          committed to doing everything I can to understand you and your needs -
          as much as I am able. My goal is to support you in learning more about
          the way you experience your thoughts, feelings, behaviors across
          different situations. Therapy can feel uncomfortable when you are
          learning new ways of being, but it can also be fun! I am often
          irreverant, expressive, and goofy during sessions with the intention
          of bringing a refreshing sense of realism, balance, and joy into your
          journey towards better health.
        </p>
      </div>
      <div class="card">
        <h1>I specialize in providing</h1>
        <ul>
          <li>Therapy to adults of all ages (18 years and older)</li>
          <li>
            Time-limited (often 20 sessions or less) behavior therapy for:
          </li>
          <ul>
            <li>Trauma and PTSD</li>
            <li>Anxiety disorders</li>
            <li>OCD</li>
          </ul>
          <li>
            Ethical and compassionate care around
          </li>
          <ul>
            <li>Suicidal thoughts and behaviors</li>
            <li>Alcohol and substance use</li>
            <li>
              Understanding the impact of systemic division, exclusion, and
              marginalization on physical and mental health
            </li>
          </ul>
        </ul>
      </div>
      <!-- </div> -->
      <!-- <div class="column2"> -->
      <div class="card">
        <h1>Education and Licensure</h1>
        <ul>
          <li>
            Temple University (Masters)
          </li>
          <li>Washington University in St. Louis (Doctorate)</li>
          <li>
            Licensed in Washington:
            <pre>PY61122055M</pre>
          </li>
          <li>
            Licensed in New York:
            <pre>025345</pre>
          </li>
        </ul>
      </div>
      <div class="card">
        <h1>Experience</h1>
        <p>
          I am skilled in cognitive-behavioral and related therapeutic
          approaches to manage symptoms of trauma/PTSD, anxiety, OCD, as well as
          suicidality and other forms of self-harm, including substance misuse.
        </p>
        These therapies are often known as:
        <ul>
          <li>
            Exposure and Response Prevention
          </li>
          <li>Prolonged Exposure</li>
          <li>
            Cognitive Processing Therapy
          </li>
          <li>
            Acceptance and Commitment Therapy
          </li>
          <li>
            Dialectical Behavior Therapy
          </li>
        </ul>
        <p>
          I have worked in a variety of medical organizations and am familiar
          with multiple systems of care, including outpatient, partial hospital,
          inpatient and other crisis care and medical settings. I completed my
          clinical internship in a Veteran's hospital and deeply value providing
          care to US Veterans and their families.
        </p>
      </div>
    </div>
  </GauzyBackground>
</template>

<script>
import GauzyBackground from '../components/GauzyBackground.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: { GauzyBackground },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  text-align: left;
}

pre {
  display: inline-block;
  margin: 0px;
}

.card {
  background-color: var(--navbar-background);
  opacity: 0.9;
  border-radius: 3px;
  padding: 30px;
  box-sizing: border-box;
  break-inside: avoid;
  margin-bottom: 30px;
}

.grid {
  column-count: 2;
  column-gap: 30px;
  grid-gap: 30px;
  row-gap: 30px;
  max-width: 1100px;
  width: 80%;
  margin: 30px;
}

ul {
  margin-bottom: 0px;
}

p:last-child {
  margin-bottom: 0px;
}

@media screen and (max-width: 700px) {
  .grid {
    column-count: 1;
  }
}
</style>
