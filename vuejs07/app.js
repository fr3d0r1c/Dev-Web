addEventListener("DOMContentLoaded", (event) => {

  Vue.createApp({

    components: {
        'message': {
            props: {
                property: String,
                bg_color: String,
            },
            template: `
            <div 
                :style="{ backgroundColor: bg_color }">
                msg: {{ property }}
            </div>`,
        },
    }

  }).mount('#app')
});
