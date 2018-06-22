import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'


var config = {
    apiKey: "AIzaSyBLuqiV24hMwDnHOZX8qHvi_w3VjdVxfF0",
    authDomain: "gdefastfood-e297c.firebaseapp.com",
    databaseURL: "https://gdefastfood-e297c.firebaseio.com",
    projectId: "gdefastfood-e297c",
    storageBucket: "gdefastfood-e297c.appspot.com",
    messagingSenderId: "829728943458"
  };
  if (!Firebase.apps.length) {
    Firebase.initializeApp(config);
}


Vue.use(VueFire)