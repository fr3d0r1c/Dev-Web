addEventListener("DOMContentLoaded", (event) => {

  Vue.createApp({

    data: ()=>({
        chiffre1: '',
        chiffre2: '',
        operateur: ''
    }),
    methods: {},
    computed: {
        result() {
            switch(this.operateur) {
                case '+':
                    return this.chiffre1 + this.chiffre2
                case '-':
                    return this.chiffre1 - this.chiffre2
                case '*':
                    return this.chiffre1 * this.chiffre2
                case '%':
                    return this.chiffre1 % this.chiffre2
                default:
                    return 0
            }
        }
    }

  }).mount('#app')
});
