<template>
<section class="container">
  <div>
    <app-logo/>
    <h1 class="title">
        gff
      </h1>
    <h2 class="subtitle">
        Nuxt.js 

      </h2>
    <googlemaps-map :center.sync="center"
                    :zoom.sync="zoom"
                    :options="mapOptions"
                    @idle="onIdle"
                    @click="onMapClick">
      <!-- User Position -->
      <googlemaps-user-position @update:position="setUserPosition" />
      <googlemaps-marker v-for="marker of markers"
                         :key="marker._id"
                         :label="{
      color: marker === currentmarker ? 'white' : 'black',
      fontFamily: 'Material Icons',
      fontSize: '20px',
      text: 'star_rate',
    }"
                         :position="marker.position"
                         @click="selectMarker(marker._id)" />
    </googlemaps-map>
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
import { MapElement } from 'vue-googlemaps';

// Those Vue props will update automatically
// (Two-way binding with .sync modifier)
const boundProps = [
  'animation',
  'clickable',
  'cursor',
  'draggable',
// ...
]

// Events from Google Maps emitted as Vue events
const redirectedEvents = [
  'click',
  'rightclick',
  'dblclick',
  'drag',
// ...
]
export default {
  components: {
    AppLogo
  },
  mixins: [
    // You need to use this mixin
    MapElement
  ]
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
