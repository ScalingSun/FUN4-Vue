<template>
  <div>
      <h2 class="username">Welkom, {{this.loginuser.Username}}</h2>
  </div>
</template>

<script>
import { mapGetters,mapState } from 'vuex';
export default {
name: 
'LoggedInUser',
data(){
    return{
    }
},
methods:{

},
computed:{
    ...mapGetters([
            'loginuser'
        ]),
    ...mapState({
            loginuser: state => state.loginuser
        }),},
        created(){
        }
}
</script>

<style scoped>
.username{
    text-align:center;
}
</style>