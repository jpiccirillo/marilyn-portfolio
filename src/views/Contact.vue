<template>
  <GauzyBackground :background="require('../assets/skyline.webp')">
    <div class="grid custom-grid">
      <div class="card a">
       <h1>Let's talk!</h1>
        <p>
        </p>
        <p>
My rate for a 60-minute individual session is $200 and my rate for a 60-minute couples session is $250. I am considered an out-of-network provider. If you have out-of-network benefits through your insurance, you can use your benefits to cover part of our sessions. I will provide you with an invoice of our sessions that you can submit to your insurance company for reimbursement.
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
            If you have an out-of-network deductible that needs to be met before
            you are eligible for reimbursement
          </li>
          <li>
            The amount you would pay in co-insurance (the amount you are
            responsible for)
          </li>
        </ol>
        <p>
          I accept payment via debit/credit/HSA/FSA card. I offer a number of sliding scale appointments for those with financial need and would be happy to answer any questions about my sliding scale rate via email or phone. 
        </p>
          I provide a 20-minute phone consultation to answer questions about logistics and disucss my
          approach to therapy. A phone consultation can very helpful in learning more about each other and how we might work together. 
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
