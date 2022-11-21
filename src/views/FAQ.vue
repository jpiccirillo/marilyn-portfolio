<template>
  <GauzyBackground :background="require('../assets/waterfall2.webp')">
    <div class="grid two-columns">
      <div class="card">
        <h1>When, where, and for how long will we meet?</h1>
        <p>
          I am licensed to provide telehealth services to adults living in
          Washington and New York. While I deeply value the connection that
          develops through in-person sessions, I have found that using
          telehealth ultimately offers more logistical advantages. All sessions
          will take place via a secure, virtual videoconferencing platform.
        </p>
        <p>
          Sessions last for 50 minutes. I typically meet with clients weekly,
          often for 2-3 months at a time. I can also meet with clients biweekly
          (e.g., to work in a focused way, often for a shorter period of time
          overall). At times, I will also provide out-of-session coaching via
          text.
        </p>
      </div>
      <div class="card">
        <h1>Is Cognitive Behavior Therapy (CBT) Talk Therapy?</h1>
        <p>Yes and no!</p>
        <p>
          I do not prescribe medications so much of our time together will be
          spent talking about the issues that concern you, the changes you've
          noticed, and ways to approach situations differently. In that way, our
          work will be consistent with a talk therapy approach.
        </p>
        <p>
          At the same time, I believe there is a limit to the amount of change
          that a weekly hour of focused conversation can provide. For that
          reason, I like to describe CBT as an active talk therapy approach. I
          want to help you get back into doing things that you used to enjoy or
          that used to be less challenging. During session, we'll spend time
          talking about how you can approach rather than avoid stressful
          memories or situations. We'll work towards facing your fears both
          during session and outside of session. Very often, approaching (vs.
          avoiding) feared memories or situations help to reduce anxiety and
          distress over time. My goal as your therapist will be to help coach
          and support you in identifying patterns of avoidance and practice new
          ways of approaching life both in and out of session. To help you get
          the maximal benefit from therapy, I will ask you to complete
          questionnaires in between sessions to help me track how we're doing
          towards reaching your goals.
        </p>
      </div>
      <!-- </div> -->
      <!-- <div class="column2"> -->
      <div class="card">
        <h1>Who do you work best with?</h1>
        <p>
          I deeply value and take great pride in my clinical practice - my
          primary goal is to support you in working towards your goals. Having
          lived and worked across the U.S., I have been fortunate to meet and
          work with people who identify with a range of backgrounds and life
          experiences. My goal is to work towards understanding how your
          perspective is shaped by your identity and life experiences and to
          engage in mindful awareness of the ways in which I may be limited in
          fully understanding all aspects of your experience. I strive to help
          reflect back to you times when it may be helpful to consider change
          and times when it may be more healing to practice acceptance.
        </p>
        <p>
          I have extensive experience using evidence-based therapies such as
          Prolonged Exposure and Cognitive Processing Therapy to facilitate
          trauma recovery, particularly from trauma that is interpersonal or
          sexual in nature. I also skilled in using evidence-based practices
          such as Cognitive Behavior Therapy and Exposure and Response
          Prevention to manage anxiety and symptoms of OCD. Finally, I have
          experience providing full-model Dialectical Behavior Therapy to manage
          chronic suicidality and forms of self-harm (e.g., non-suicidal self
          injury, substance misuse). The first few sessions will be focused on
          learning what you are struggling with and how I can tailor
          evidence-based strategies to help you meet your goals.
        </p>
      </div>
      <div class="card">
        <h1>Insurance and payment</h1>
        <p>
          My fee for consultation and psychotherapy is available upon request.
        </p>
        <p>
          I am not paneled with insurance companies and am considered an
          out-of-network provider. Some clients may be able to use
          out-of-network benefits to reimburse part of their sessions. I will
          provide you with a superbill that can be submitted to your insurance
          company for reimbursement purposes.
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
