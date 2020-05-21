<template>
    <md-dialog :md-active.sync="TransactionDialog">
      <md-dialog-title><b>Stempelen</b></md-dialog-title>
      <form class="form">
        <md-field  v-for="(user,index) in selectedUsers" :key='user.id'>
          <label>{{user.Name}}</label>
          <md-input type="number" v-model="dataUser[index].Amount" value="0"></md-input>
          <md-input type="hidden" v-model="dataUser[index].id" /> 
      </md-field>
    </form>
      <md-button class="button md-raised md-primary" v-on:click="Stamp">stempel</md-button>
      <md-button class="button md-raised md-accent cancel" v-on:click="Cancel">annuleer</md-button>
  </md-dialog>
</template>

<script>
export default {
name:'transaction',
props:{
  'selectedUsers' : Array,
  StampKey : Boolean,
  ArraySize: Number,

},
data(){
  return{
    TransactionDialog : this.StampKey,
    dataUser: []
  }
},
watch:{
  TransactionDialog(val){
    this.$emit("update:StampKey", val)
  },
  StampKey(val){
    this.TransactionDialog = val;
  },
},
methods:{
  Stamp(){
    console.log(this.dataUser)
    this.$emit("Stamp",this.dataUser)
  },
  Cancel(){
    this.$emit("cancel");
  },
},
  created(){
    if(this.ArraySize >=0){
      for(var i=1; i<=this.ArraySize; i++) {
      this.dataUser.push({"id": "", "Amount": ""});
      }
    }
  }
}
</script>

<style scoped>
.form {
  padding: 10% 10% 10% 10%;
}
.cancel {
  float: right;
}
.md-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>