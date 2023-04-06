<template>
  <GauzyBackground :background="require('@/assets/beach.jpeg')">
    <div class="grid two-columns">
      <div class="headshot">
        <img src="../assets/headshot.jpg" />
      </div>
      <div class="card">
        <h1><span class="oblique">About Me</span></h1>
        <p>
          I have nearly 10 years of experience helping adults and couples
          identify the patterns in their thoughts, feelings, and behaviors,
          particularly within the context of anxiety, stress/trauma/PTSD, OCD,
          substance misuse, and chronic thoughts of suicide. I strongly value a
          collaborative approach to therapy and am skilled at tailoring
          evidence-based treatments to fit your individual goals.
        </p>
        <p>
          As a human and therapist, I strive to be
          <span class="“oblique”">radically genuine</span>. I prioritize being
          direct, honest, and compassionate. I'm committed understanding you and
          your needs - as best as I am able. My goal is to support
          <span class="“oblique”">you</span> in learning more about the ways you
          experience your thoughts, feelings, and behavior across different
          situations and to discuss or practice different ways to reach your
          life goals.
        </p>
        <p>
          I'm grateful to have worked in multiple medical organizations,
          systems, and levels of care, including outpatient clinics, partial
          hospital programs, inpatient/crisis care centers, medical settings,
          and Veterans Hospitals. I aim to provide ethical and compassionate
          care around experiences that are often stigmatized, such as
          suicidality and substance use. Finally, I'm committed to understanding
          and validating the impact of systemic division, exclusion, and
          marginalization on one's physical and mental health.
        </p>
        <p>
          I've been fortunate to meet and work with hundreds of people who
          identify with a range of backgrounds and life experiences. My goal is
          to work towards understanding how your perspective is shaped by your
          identity and life experiences and to to be mindful of the ways in
          which I may be limited in fully understanding
          <span class="“oblique”">all</span> aspects of your experience. Above
          all, <span class="“oblique”">you</span> are the expert on your
          experience and I look forward to learning from and with you.
        </p>
        <p>
          I'm grateful to have worked in multiple medical organizations,
          systems, and levels of care, including outpatient, partial hospital,
          inpatient/crisis care, medical settings, and Veterans Hospitals. I aim
          to provide ethical and compassionate care around experiences that are
          often stigmatized, such as suicidality and substance use. Finally, I'm
          committed to understanding and validating the impact of systemic
          division, exclusion, and marginalization on one's physical and mental
          health.
        </p>
        <p>
          Therapy can feel uncomfortable, but I promise that it can also be fun.
          I bring my expressive, goofy, and irreverant self into our work to
          help sessions feel refreshing, genuine, and joyful - whenever
          possible!
        </p>
      </div>
      <div class="card">
        <h1><span class="oblique">Areas of specialization</span></h1>
        <p>
          I practice flexibily and collaboratively, primarily using
          cognitive-behavioral, mindfulness- or acceptance-based, and
          dialectical-behavioral approaches.
        </p>
        Therapeutic approaches consistent with my training and experience are
        often known as:
        <ul>
          <li>Exposure and Response Prevention</li>
          <li>Prolonged Exposure</li>
          <li>Cognitive Processing Therapy</li>
          <li>Acceptance and Commitment Therapy</li>
          <li>Dialectical Behavior Therapy</li>
        </ul>
      </div>
      <div class="card">
        <h1>
          <span class="“oblique”"
            >Licensure, Education, and Advanced Training</span
          >
        </h1>
        <h2>Licensure</h2>
        <ul>
          <li>Psychologist, WA State License Number: PY61122055M</li>
          <li>Psychologist, NY State License Number: 025345</li>
        </ul>
        <h2>Education</h2>
        <ul>
          <li>
            Doctor of Philosophy, Clinical Psychology, Washington University in
            St. Louis
          </li>
          <li>Master of Arts, Psychology, Temple University</li>
          <li>
            Bachelor of Arts, Psychology, Washington University in St. Louis
          </li>
        </ul>
        <h2>Advanced training</h2>
        <ul>
          <li>Postdoctoral Fellowship, University of Washington</li>
          <li>Clinical Internship, Seattle VA Hospital</li>
          <li>
            Advanced training in Dialectical Behavior Therapy and Prolonged
            Exposure, Center for Suicide Prevention and Recovery, University of
            Washington
          </li>
          <li>
            Research fellowships in Psychology and Alcohol Research, University
            of Washington
          </li>
        </ul>
      </div>
    </div>
  </GauzyBackground>
</template>

<script>
import GauzyBackground from "../components/GauzyBackground.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { GauzyBackground },
};
</script>

<style scoped lang="scss">
@import "../assets/gridStyle.scss";

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
