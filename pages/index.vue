<template>
<section class="container">
  <div>
    <app-logo/>
    <h1 class="title">
        gff
      </h1>
    <h2 class="subtitle">
        Nuxt.js вфывфывфвфы
      </h2>
    <div class="links">
      <a href="https://nuxtjs.org/"
         target="_blank"
         class="button--green">Documentation</a>
      <a href="https://github.com/nuxt/nuxt.js"
         target="_blank"
         class="button--grey">GitHub</a>
    </div>
  </div>
</section>

</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
  components: {
    AppLogo
  }
}

</script>

<style lang="scss">
$color1:#6cb4b8;
$color2:#bedce3;
$color3:#f3f3f6;
$color4:#e3dcd5;
$color5:#da7015;
body {
  background: $color4;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
