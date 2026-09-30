addEventListener("DOMContentLoaded", (event) => {

  Vue.createApp({
    data: () => ({
      message: 'Hello Vue!'
    })
  }).mount('#app')
});