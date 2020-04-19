<template>
    <tr>    
        <td>{{User.id}}</td>
        <td>{{User.Name}}</td>
        <td>{{User.EmailAddress}}</td>
        <td>{{User.Wealth}}</td>
        <td>{{User.Active}}</td>
        <td><button v-on:click="$emit('enableAddCurrencyPerUser',User)">Geld toevoegen</button></td>
        <td><button v-on:click="$emit('editUser', User)">Edit</button></td>
        <td><Delete v-bind:User="User" v-on:deleteUser="$emit('deleteUser',User.id)" /></td>
    </tr>
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
