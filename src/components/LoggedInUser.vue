<template>
  <div>
      <h3>Welkom, {{this.loginuser.Username}}</h3>
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

<style>

</style>