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

  }).mount('#message_app')

  Vue.createApp({
    data(){
        return {
            globalCounter: 0,
            lastCounter: '',
        }
    },
    methods: {
        incrementGlobalCounter(valeurAjoutee) {
            this.globalCounter += valeurAjoutee;
            this.lastCounter = valeurAjoutee;
        }
    },
    components: {
        'counter-button': {
            props: {
                step: {
                    type: Number,
                    default: 1
                }
            },
            data() {
                return {
                    counter: 0
                }
            },
            methods: {
                increment() {
                    this.counter += this.step;
                    this.$emit('update_counter', this.step);
                }
            },
            template: `
                <div>
                    num: {{ counter }}
                    <button @click="increment">Ajout</button>
                </div>
            `
        }
    }
  }).mount('#counter_app');
});