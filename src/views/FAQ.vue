<template>
  <GauzyBackground :background="require('../assets/waterfall.webp')">
    <div class="grid two-columns">
      <div class="card">
        <h1>When, where, and for how long will we meet?</h1>
        <p>
          I meet via telehealth with adults living in
          Washington or New York using a secure, virtual videoconferencing platform.
        </p>
        <p>
          Some folks find it's easier to make progress when meeting briefly for a shorter period of time, others will prefer to space sessions out over time. Regardless, I find it's easiest to make progress on an issue when we meet weekly, at least for a short period of time in the beginning. Our sessions will typically last 50 minutes and I can also provide out-of-session coaching via
          text as needed.
        </p>
      </div>
      <div class="card">
        <h1>Is your approach "Talk Therapy"?</h1>
        <p>Yes and no!</p>
        <p>
          I do not prescribe medications so much of our time together will be
          spent talking about the issues that concern you, the changes you've
          noticed, and ways to approach situations differently. In that way, we'll be "talking" about the important issues for you!
        </p>
        <p>
          At the same time, I believe there's much to be gained by focusing on what you can be "doing" differently to get to where you want to be. During session, we'll spend time
          talking about how you can approach memories or situations differently. My goal as your therapist will be to help coach
          and support you in practicing new ways of approaching life both in and out of session. I may also ask you to complete
          questionnaires in between sessions to help me track how we're doing
          towards reaching your goals.
        </p>
      </div>
      <div class="card">
        <h1>Who do you work best with?</h1>
        <p>
          My
          primary goal is to support YOU in working towards your goals. I've been fortunate to meet and
          work with hundreds of people who identify with a range of backgrounds and life
          experiences. My goal is to work towards understanding how your
          perspective is shaped by your identity and life experiences and to
          to be mindful of the ways in which I may be limited in
          fully understanding all aspects of your experience. I strive to help
          you balance between change when possible and acceptance when change is not possible.
        </p>
        <p>
          I have extensive experience using trauma-focused, evidence-based therapies 
          (Prolonged Exposure and Cognitive Processing Therapy) to facilitate
         recovery, particularly from trauma that is interpersonal or
          sexual in nature. I also skilled in using evidence-based therapies
          such as Cognitive Behavior Therapy and Exposure and Response
          Prevention to manage symptoms of anxiety and OCD. Finally, I've trained in full-model Dialectical Behavior Therapy to manage
          chronic suicidality and forms of self-harm (e.g., non-suicidal self
          injury, substance misuse). During the first few sessions, I'll ask lots of questions to better understand what you're experiencing, how I can help, and develop a collaborative plan to help you meet your goals.
         
        </p>
      </div>
      <div class="card">
        <h1>Insurance and payment</h1>
        <p>
          My rates for therapy are available upon request.
        </p>
        <p>
          I am not paneled with insurance companies and so I'm considered an out-of-network provider. However, if your insurance provides out of network benefits, you may be able
          to use your benefits to cover part of our sessions. I will
          provide you with an invoice for reimbursement purposes.
        </p>
        <p>
          Before we begin, I encourage you to ask your insurance provider:
        </p>
        <ol>
          <li>
            If you have out-of-network benefits for mental health/behavioral
            health treatment
          </li>
          <li>
            The amount you would pay in co-insurance (the amount you are
            responsible for)
          </li>
          <li>
            If you have an out-of-network deductible that needs to be met before
            you are eligible for reimbursement
          </li>
        </ol>
        <p>
          I accept payment via debit/credit card. You are welcome to use your
          HSA/FSA debit card to pay for sessions.
        </p>
      </div>
    </div>
  </GauzyBackground>
</template>

<script>
import GauzyBackground from '../components/GauzyBackground.vue'

export default {
  name: 'FAQ',
  components: { GauzyBackground },
}
</script>

<style scoped lang="scss">
@import '../assets/gridStyle.scss';
</style>
