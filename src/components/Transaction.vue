<template>
<h1>detering</h1>
    <!-- <md-dialog :md-active.sync="TransactionDialog">
      <md-dialog-title><b>Stempelen</b></md-dialog-title>
      <form class="form" @submit="Stamp">
        <md-field v-for="user in selectedUsers" :key='user.Id'>
          <label>{{user.Name}}</label>
          <input type="hidden" v-model="userId" value="user.Id"> 
          <md-input v-model="Amount"></md-input>
      </md-field>
      <md-button class="button md-raised md-primary" v-on:click="Stamp">stempel</md-button>
      <md-button class="button md-raised md-accent cancel" v-on:click="Cancel">annuleer</md-button>
    </form>
  </md-dialog> -->
</template>

<script>
export default {
name:'transaction',
props:{
  'selectedUsers' : Array,
  StampKey : Boolean

},
data(){
  return{
    userId: Number,
    Amount: Number,
    TransactionDialog : this.StampKey
  }
},
methods:{
  Stamp(AllStamps){
    console.log(AllStamps)
    //this.$emit('Stamp', AllStamps);
  },
  Cancel(){
    this.$emit("cancel");
  },
},
created(){
  console.log('transactionComp loaded')
}

}
</script>

<style scoped>
.centered{
  text-align:center;
}
</style>