<template>
    <md-dialog :md-active.sync="TransactionDialog">
      <md-dialog-title><b>Stempelen</b></md-dialog-title>
      <form class="form" @submit="Stamp">
        <md-field v-for="user in selectedUsers" :key='user.id'>
          <label>{{user.Name}}</label>
          <input type="hidden" v-model="test[user.id].userId" value="user.Id"> 
          <md-input type='number' v-model="test[user.id].amount"   value="0"></md-input>
      </md-field>
      <md-button class="button md-raised md-primary" v-on:click="Stamp">stempel</md-button>
      <md-button class="button md-raised md-accent cancel" v-on:click="Cancel">annuleer</md-button>
    </form>
  </md-dialog>
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
    test: [{
      userId: 0,
      amount: 0
    }],
    TransactionDialog : this.StampKey
  }
},
watch:{
  TransactionDialog(val){
    this.$emit("update:StampKey", val)
  },
  StampKey(val){
    this.TransactionDialog = val;
  }
},
methods:{
  Stamp(){
    console.log(this.test)

    //this.$emit('Stamp', AllStamps);
  },
  Cancel(){
    this.$emit("cancel");
  },
},
created(){
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