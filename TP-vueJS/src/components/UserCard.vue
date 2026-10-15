<script>
export default {
    data() {
        return {
            nbrUsersConnected:100
        }
    },
    props: {
        user: {
            type: Object,
            default: () => ({
                firstname: 'james',
                lastname: 'bond',
                pseudo: '007',
                title: 'My name is bond, ... james bond',
            })
        },
    },
    mounted() {
        alert(`bienvenue ${this.user.firstname.toUpperCase()} ${this.user.lastname.toUpperCase()}!`);
    }
}
</script>

<template>
    <div >
        <div style="text-align: center;">
            <i>Bienvenue à toi {{user.firstname}} {{user.lastname.toUpperCase()}}!</i>
            <br/>nbrUsersConnected:{{nbrUsersConnected}}
        </div>
        <p>Votre carte d'identité :</p>
        <table style="border: 1px solid black;border-collapse: collapse;" >
            <tr style="border: 1px solid black;">
                <th>votre pseudo</th><td> {{user.pseudo}}</td>
            </tr>
            <tr style="border: 1px solid black;">
                <th>votre prenom</th><td> {{user.firstname}}</td>
            </tr>
            <tr style="border: 1px solid black;">
                <th>votre nom</th><td> {{user.lastname}}</td>
            </tr>
        </table>
    </div>
</template>

<style>
th, td {
    padding: 5px;
}
</style>