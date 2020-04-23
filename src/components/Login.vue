<template>
  <div class="all">
    <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>
            <md-card-content>


          <md-field>
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.Emailaddress" />
            <span class="md-error">een email is verplicht</span>
            <span class="md-error">Invalid email</span>
          </md-field>
        

        
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="Password">Wachtwoord</label>
                <md-input name="Password" type="Password" id="Password"  v-model="form.Password" />
                <span class="md-error">je moet een wachtwoord invullen</span>
              </md-field>
            </div>
        </div>
        <p>Heb je nog geen account, klik dan hieronder.</p>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="submitting" />

        <md-card-actions>
        <md-button v-on:click="Add">nieuw toevoegen</md-button>
          <md-button type="submit" class="md-primary" v-on:click="Login">Login</md-button>
        </md-card-actions>
      </md-card>
    </form>
    </div>
  </div>
</template>
<script>

import TokenService from "@/services/TokenService"
export default {
    name:'Login',
    data(){
        return {
            form:{
             Emailaddress: '',
             Password: '',
            },
            submitting: false

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
            this.submitting = true;
            const LoginUser = {
                Emailaddress: this.form.Emailaddress,
                Password: this.form.Password,
            }
           var userdata =  TokenService.login(LoginUser);
           //hier zit async data (userdata is async)

           this.$emit('login', userdata)
        },
        Add(){
            console.log('a href click works too')
        }
    }
}
</script>

<style scoped>
.all{
    margin-left:33.3%;
    margin-top:15%;
}

</style>