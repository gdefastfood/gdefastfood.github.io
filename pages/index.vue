<template>
<section class="container">
  <div>
    <div>
        <div id="map" style="width: 600px; height: 400px"></div>
        <h1>Карта</h1>
    </div>
  </div>
</section>

</template>

<script>

export default {
  data() {
    return {
      map: {},
    }
  },  
  created() {

  },
  mounted() {
    let maps = new Promise((resolve, reject) => {
       let script = document.createElement('script')
       script.onload = () => {
        const ymaps = global.ymaps;
        ymaps.ready(() => {
                    new ymaps.Map("map", {
                        center: [55.76, 37.64],
                        zoom: 12
                    });
                }); 
       }
       script.async = true
       script.src = "//api-maps.yandex.ru/2.1/?lang=ru_RU"
       document.head.appendChild(script)
      })
       
  },
  computed: {
  },
  components: {
    
  },
   
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
