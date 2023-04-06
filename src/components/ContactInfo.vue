<template>
  <div class="contact-options">
    <div>
      To learn more or to schedule an appointment, contact me at
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
      subject: 'Interest in therapy',
      body:
        'Hi, I am interested in scheduling a [phone consultation / therapy session]...',
    }
  },
}
</script>
<style lang="scss" scoped>
a {
  display: inline-block;
}
</style>
