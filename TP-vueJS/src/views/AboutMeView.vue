<script setup>
import UserCard from '@/components/UserCard.vue';

const utilisateur = {
    firstname: 'Frédéric',
    lastname: 'Alleron',
    pseudo: 'falleron',
    title: 'Bonjour, Moi c\'est Frédéric'
}

</script>

<template>
    <UserCard :user="utilisateur"></UserCard>
</template>

