<template>
<div>
    <form class="edit oneLine" @submit="Edit"> 
        <h3 style="text-align:center">gebruiker wijzigen</h3>
        Naam:
        <input type="text" class="textbox" size="10" v-model="Name" id="Name">
        Wachtwoord:
        <input type="password"  v-model="Password" class="textbox" size="10" id="password">
        Emailadres:
        <input type="email" v-model="EmailAddress" class="textbox" id="Emailaddress">
        <button class="button" v-on:click="Cancel">Cancel</button>
        <button class="button">Update</button>
    </form>
</div>
</template>

<script>

export default {
    name: "Edit",
    props:["User"],
    data(){
         return {
            Name: '',
            Password: '',
            EmailAddress: ''
        }
    },
    methods:{
        Edit(e){
            e.preventDefault();
            const updatedUser = {
                id:this.User.id,
                Name: this.Name,
                Password: this.Password,
                EmailAddress: this.EmailAddress,
                Active: this.User.Active
            }
            this.$emit('editUser', updatedUser);
        },
        Cancel(e){
            e.preventDefault();
            this.$emit('cancel')
        }
    }
}

</script>

<style scoped>
    .edit{
        text-align:left;
        background-color:lightgrey;
        max-height:10%;
        float:left;
        margin-bottom:5%;
        min-width:100%;
        padding-bottom:2%;
    }
    .textbox{
        max-width:35%;  
    }
    .oneLine{
        display:inline-block;
    }
    .button{
        float:right;
        margin-right:1%;
        min-width:10%;
    }
</style>
