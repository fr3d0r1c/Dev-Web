addEventListener("DOMContentLoaded", (event) => {

  Vue.createApp({

    date(){
      return {
        bouton: "Afficher",
        message: "Bonjour",
        
      }
    }

  }).mount('#app')
});