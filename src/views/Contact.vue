<template>
  <GauzyBackground :background="require('../assets/skyline.webp')">
    <div class="grid custom-grid">
      <div class="card a">
        <h1>Let's talk!</h1>
        <p>
        </p>
        <p>
My rate for a 60-minute individual session is $200 and my rate for a 60-minute couples session is $250. I am not paneled with insurance companies and am considered an out-of-network provider. If you have out-of-network benefits through your insurance, you can use your benefits to cover part of our sessions. I will provide you with an invoice of our sessions that you can submit to your insurance company for reimbursement.
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
          I accept payment via debit/credit/HSA/FSA card. I offer a number of sliding scale appointments for those with financial need and would be happy to answer any questions about a sliding scale rate via email or phone. 
        </p>

I'm also happy to provide a 20-minute phone consult to answer questions about logistics and discuss my approach. Starting therapy with a new provider can feel daunting at first and a phone consult can be helpful towards getting to know each other better and figuring out how I can best support you. 
        <p>
         Please reach out, I'd love to hear from you!
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
  name: 'Contact',
  components: { GauzyBackground, ContactInfo },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.custom-grid {
  margin-top: 30px;
}

.monospace {
  font-size: 12pt;
  word-break: break-all;
  font-family: monospace;
}

@import '../assets/gridStyle.scss';
</style>
