<template>
  <div class="contact-options">
    <div>
      To learn more or to book an appointment, contact me at
      <a
        class="monospace"
        :href="`mailto:${email}?subject=${subject}&body=${body}`"
      >
        {{ email }}
      </a>
      or call (646) 481-0175.
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: 'drmarilynpiccirillo@gmail.com',
      subject: 'Interest in Phone Consult',
      body:
        'Hi, I am interested in a 15 minute phone consultation to discuss...',
    }
  },
}
</script>
<style lang="scss" scoped>
a {
  display: inline-block;
}
</style>
