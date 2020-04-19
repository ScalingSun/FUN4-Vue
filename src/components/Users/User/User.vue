<template>
    <md-table-row>    
        <md-table-cell>{{User.id}}</md-table-cell>
        <md-table-cell>{{User.Name}}</md-table-cell>
        <md-table-cell>{{User.EmailAddress}}</md-table-cell>
        <md-table-cell>{{User.Wealth}}</md-table-cell>
        <md-table-cell>{{User.Active}}</md-table-cell>
        <md-table-cell><md-button class="md-raised md-primary" v-on:click="$emit('enableAddCurrencyPerUser',User)">Geld toevoegen</md-button></md-table-cell>
        <md-table-cell><md-button class="md-raised md-primary" v-on:click="$emit('editUser', User)">Edit</md-button></md-table-cell>
        <md-table-cell><Delete v-bind:User="User" v-on:deleteUser="$emit('deleteUser',User.id)" /></md-table-cell>
    </md-table-row>
</template>

<script>
import Delete from "./Delete";
export default {
    name: "User",
    components:{
        Delete
    },
    props:["User"],

}

</script>

<style scoped>
    
</style>
