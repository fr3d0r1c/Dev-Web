addEventListener("DOMContentLoaded", (event) => {

  Vue.createApp({

    data: () => ({
      lien: ""
    }),
    methods: {
      //afficherInfo() {
      afficherInfo: function () {
        this.displayInfo = !this.displayInfo;
        this.action = this.displayInfo ? 'Cacher' : 'Afficher';
      },
    },

  }).mount('#app')
});
