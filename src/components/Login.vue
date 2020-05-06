<template>
    <div>
        <form class="Login" @submit="Login"> 
            <div  style="width:35%; padding:1px 10px 1px 10px; border: 1px solid grey;">
            <h3 style="text-align:center">Inloggen</h3>

            <md-field>
            <label>Emailadres:</label>
                <md-input v-model="Emailaddress"></md-input>
            </md-field><br/>

            <md-field>
            <label> Wachtwoord:</label>
                <md-input v-model="Password" type="password"></md-input>
            </md-field>            
            <md-button class="button md-raised md-primary" v-on:click="Login">Login</md-button>
            </div>
        </form>
        <template v-if="LoginState">
            <p class="WarningText">Wrong login credentials or the server might be down.</p>
        </template>
        <template v-else>
        </template>
    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return {
            Emailaddress: '',
            Password: '',
        }
    },
    props:{
        LoginState: Boolean
    },
    created(){

    },
    methods:{
        Login(e){
            e.preventDefault();
            const LoginUser = {
                Emailaddress: this.Emailaddress,
                Password: this.Password,
            }
            this.$emit('login', LoginUser);
        }
    }
}
</script>

<style>
.WarningText{
    color:red;
}
.Login{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    margin-top:15%;
    text-align:center;
    
}

</style>