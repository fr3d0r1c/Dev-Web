addEventListener("DOMContentLoaded", (event) => {

  Vue.createApp({

    data: () => ({
      displayInfo: false,
      action: 'Afficher',
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
