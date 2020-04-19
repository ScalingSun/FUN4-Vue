<template>
    <div>
        <form class="Login" @submit="Login"> 
            <h3 style="text-align:center">Inloggen</h3>
            Emailadres:
            <input type="email" v-model="Emailaddress" class="textbox" id="Emailaddress">
            Wachtwoord:
            <input type="password" v-model="Password" class="textbox" size="10" id="password">
            
            <button class="button">Login</button>
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

</style>