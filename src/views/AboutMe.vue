<template>
  <GauzyBackground :background="require('@/assets/beach.jpeg')">
    <div class="grid two-columns">
      <div class="headshot">
        <img src="../assets/headshot.jpg" />
      </div>
      <div class="card">
        <h1><span class=“oblique”>About Me</span></h1>
        <p>
          I provide virtual psychotherapy to adults and couples
          living in Washington or New York. I deeply enjoy working with folks who are looking to learn more about have nearly 10 years of
          experience helping adults
          recover from trauma/PTSD or those looking to better understand and manage symptoms of anxiety, OCD, chronic
          suicidality and forms of self-harm, including substance misuse. I
          am skilled at tailoring evidence-based treatments to fit your individual needs. 
        </p>
        <p>
          As a human and therapist, I strive to be <span class=“oblique”>radically genuine</span>. I prioritize being direct, honest, and compassionate. I'm
          committed to doing my best to understand you and your needs -
          as much as I am able. My goal is to support you in learning more about
          the way you experience your thoughts, feelings, behaviors across
          different situations. 
        </p>
        <p>
            Therapy can feel uncomfortable, but it can also be fun to learn more about yourself and practice new ways of being! I bring my expressive, goofy, and irreverant self to sessions to keep our work refreshing, genuine, and joyful - whenever possible.
        </p>
      </div>
      <div class="card">
        <h1><span class=“oblique”>Areas of specialization</span></h1>
        <p>
          I've built nearly 10 years of experience working with folks experiencing stress, relationship difficulties, and issues with self-esteeem. I practice collaboratively using cognitive-behavioral, mindfulness or acceptance-based, or dialectical-behavioral approaches to provide treatment for symptoms of anxiety, trauma or PTSD, OCD, substance misuse, or chronic thoughts of sucide.
        </p>
        Therapeutic approaches consistent with my training and experience are often known as:
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
          I'm grateful to have worked in multiple medical organizations, systems, and levels of care. I've worked with folks receiving care in outpatient, partial hospital,
          inpatient/crisis care, or medical settings. I deeply value providing
          care to Veterans and their families.
        </p>
      </div>
      <div class="card">
        <h1><span class=“oblique”>Licensure, Education, and Advanced Training</span></h1>
        <ul>
         <li>
            Psychologist, WA State License Number: PY61122055M
          </li>
          <li>
            Psychologist, NY State License Number: 025345
          </li>
          <li>
            Doctor of Philosophy, Clinical Psychology, Washington University in St. Louis
          </li>
          <li> Master of Arts, Psychology, Temple University</li>
         </li>
          <li> Bachelor of Arts, Psychology, Washington University in St. Louis</li>
          </li>
          <li> Postdoctoral Fellowship, University of Washington</li>
           </li>
          <li> Clinical Internship, Seattle VA Hospital</li>
          </li>
          <li> Advanced training in Dialectical Behavior Therapy and Prolonged Exposure, Center for Suicide Prevention and Recovery, University of Washington</li>
          </li>
          <li> Research Fellowships in Psychology and Alcohol Research, University of Washington</li>
        </ul>
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

<style scoped lang="scss">
@import '../assets/gridStyle.scss';

.headshot {
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    user-select: none;
  }
}

@media screen and (min-width: 1000px) {
  .headshot {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
