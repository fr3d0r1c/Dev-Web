export default {
    data(){
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
    template: `
    <div >
        <slot name=welcome></slot>
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
    </div>`,
}