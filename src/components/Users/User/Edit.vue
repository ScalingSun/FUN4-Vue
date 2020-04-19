<template>
    <md-dialog :md-active.sync="EditDialog">
         <md-dialog-title><b>Gebruiker wijzigen</b></md-dialog-title>
            <form class="form" @submit="Edit"> 
                <md-field>
                <label>Gebruikersnaam</label>
                    <md-input v-model="Name" type="text" id="Name"></md-input>
                </md-field>
                <md-field>
                <label>Wachtwoord</label>
                    <md-input v-model="Password" type="password" id="password"></md-input>
                </md-field>
                <md-field>
                <label>Emailadres</label>
                    <md-input v-model="EmailAddress" id="EmailAddress"></md-input>
                </md-field>
                <md-button class="button md-raised md-primary">Update</md-button>
                <md-button class="button md-raised md-accent cancel" v-on:click="Cancel">Cancel</md-button>
            </form>
    </md-dialog>
</template>

<script>

export default {
    name: "Edit",
    props:["User"],
    data(){
         return {
            Name: '',
            Password: '',
            EmailAddress: '',
            EditDialog: true
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
        },
        created(){
        }
    }
}

</script>

<style scoped>
    .form{
        padding: 10% 10% 10% 10%;
    }
    .cancel{
        float:right;
    }
    .md-title{
        display:flex;
        align-items:center;
        justify-content: center;
    }
</style>
