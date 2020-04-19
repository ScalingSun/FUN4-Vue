<template>
  <div id="app">
    <template v-if="LoggedIn">
      <LoggedInUser />
      <Transaction />
      <Users v-bind:Users="Users" :key="key" v-on:rerender="forcererender"/>
    </template>
    <template v-else>
      <Login v-on:login="Login"  v-bind:LoginState="FaultyLogin" />
    </template>
  </div>
</template>

<script>
import Users from '../components/Users/Index';
import Login from '../components/Login';
import LoggedInUser from '../components/LoggedInUser';
import Transaction from '../components/Transaction';
import { mapGetters, mapActions,mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
    Users,
    Login,
    LoggedInUser,
    Transaction
  },
  props:{
    Users: []
    },
    data(){
      return {
        key: 1,
        LoggedIn: false,
        FaultyLogin: false,
      }
    },
    methods:{
      forcererender(){
        this.key += 1;
      },
      async GetUserdata(){
        console.log(this.userId)
        await this.getUserinfo(this.userId);
      },
      async Login(UserLogin){
         await this.Req(UserLogin)
          if(this.token){
            this.LoggedIn = true;
            this.GetUserdata();
          }
          else{
          this.FaultyLogin = true;
          }
      },
      ...mapActions({
        Req: 'RequestToken',
        getUserinfo: 'requestUserdata'
      })
    },
        computed:{
        ...mapGetters([
            'token',
            'userId'

        ]),
        ...mapState({
            token: state => state.token.token,
            userId: state => state.token.userId
        }),
        
    },
    Created(){
    }
}
</script>

<style>
</style>
