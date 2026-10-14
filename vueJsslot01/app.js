import UserCard from "./UserCard.js";

Vue.createApp({
    data:()=>({
        user: {
            firstname: "Frédéric",
            lastname: "Alleron",
            pseudo: "falleron",
            title: "Apprenti VueJS",
        }
    }),
    components:{
        'user-card':UserCard,
    }
}).mount('#app');