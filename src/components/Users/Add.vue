<template>
    <md-dialog :md-active.sync="AddDialog">
        <md-dialog-title><b>Gebruiker toevoegen</b></md-dialog-title>
            <form class="form" @submit="Add"> 
                <md-field>
                <label>Gebruikersnaam</label>
                    <md-input v-model="Name" type="text" id="Name"></md-input>
                </md-field>
                <md-field>
                <label>Wachtwoord</label>
                    <md-input v-model="Password" type="Password" id="Password"></md-input>
                </md-field>
                <md-field>
                <label>Emailadres</label>
                    <md-input v-model="Emailaddress" id="Emailaddress"></md-input>
                </md-field>
                <md-button class="button md-raised md-accent cancel" v-on:click="Cancel">annuleer</md-button>
                <md-button class="button md-raised md-primary">creër</md-button>
            </form>
    </md-dialog>
</template>

<script>
export default {
    name:'Add',
    data(){
        return {
            Name: '',
            Password: '',
            Emailaddress: '',
            AddDialog: true,
        }
    },
    methods:{
        Add(e){
            e.preventDefault();
            const newUser = {
                Name: this.Name,
                Password: this.Password,
                Emailaddress: this.Emailaddress,
                Wealth: 0,
                Active: 1
            }
            this.$emit('addUser', newUser);
        },
        Cancel(e){
            e.preventDefault();
            console.log('this works');
            this.$emit('cancel');
        },
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
