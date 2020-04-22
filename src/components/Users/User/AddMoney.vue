<template>
  <md-dialog :md-active.sync="AddCurrencyDialog">
    <md-dialog-title><b>Geld toevoegen</b></md-dialog-title>
    <form class="form" @submit="AddCurrency">
      <md-field>
        <label>Bedrag</label>
        <md-input v-model="Amount" type="number" step="0.75" min="7.50" max="75" id="Amount"></md-input>
      </md-field>
      <md-button class="button md-raised md-primary" v-on:click="AddCurrency">betalen</md-button>
      <md-button class="button md-raised md-accent cancel" v-on:click="Cancel">annuleer</md-button>
    </form>
  </md-dialog>
</template>

<script>
export default {
name: 'AddMoney',
data(){
    return {
        Amount: 7.5,
        AddCurrencyDialog: this.AddCurrencyKey,
    }
},
props:{
    AddCurrencyKey: Boolean,
    User : {}
},
  watch: {
    AddCurrencyDialog(val) {
      this.$emit("update:AddCurrencyKey", val);
    },
    AddCurrencyKey(val) {
      this.AddCurrencyDialog = val;
    },
  },
methods:{
        AddCurrency(e){
            e.preventDefault();
            const Transaction = {
                Amount: Number(this.Amount),
                UserID: this.User.id 
                
            }
            this.$emit('AddCurrencyUser', Transaction);
        },
        Cancel(e){
            e.preventDefault();
            this.$emit('cancel')
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