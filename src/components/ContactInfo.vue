<template>
  <div class="contact-options">
    <div>
      <a
        class="monospace"
        :href="`mailto:${email}?subject=${subject}&body=${body}`"
      >
        {{ email }}
      </a>
    </div>
    <div>(646) 481-0715</div>
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
.contact-options {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 10px;
}

@media screen and (max-width: 700px) {
  .contact-options {
    grid-template-columns: 1fr;
  }
}
</style>
