<template>
    <md-dialog :md-active.sync="AddDialog">
        <md-dialog-title><b>gebruiker toevoegen</b></md-dialog-title>
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
                <md-button class="button md-raised md-primary">creër</md-button>
                <md-button class="button md-raised md-accent cancel" v-on:click="Cancel">annuleer</md-button>
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
            this.$emit('cancel')
        },
    }
}

</script>

<style scoped>
.add{
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
