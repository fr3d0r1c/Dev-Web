addEventListener("DOMContentLoaded", (event) => {

  Vue.createApp({

    data() {
      return {
        message: 'Votre compteur est à :',
        count: 1,
        show: true,
      }
    }
  }).mount('#app')

});