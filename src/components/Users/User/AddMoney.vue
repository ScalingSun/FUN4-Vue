<template>
  <div>
    <form class="Add oneLine" @submit="AddCurrency"> 
        <h3 style="text-align:center">Geld toevoegen</h3>
        Bedrag:
        <input type="number"  v-model="Amount" class="textbox" id="Amount">
        <button class="button" v-on:click="Cancel">Cancel</button>
        <button class="button">Voeg toe</button>
    </form>
  </div>
</template>

<script>
export default {
name: 'AddMoney',
data(){
    return {
        Amount:Number
    }
},
methods:{
        AddCurrency(e){
            e.preventDefault();
            const Transaction = {
                Amount: this.Amount
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
    .Add{
        text-align:left;
        background-color:lightgrey;
        max-height:10%;
        float:left;
        margin-bottom:5%;
        min-width:100%;
        padding-bottom:2%;
        text-align: center;
    }
    .textbox{
        max-width:35%;  
    }
    .oneLine{
        display:inline-block;
    }
    .button{
        float:right;
        margin-right:1%;
        min-width:10%;
    }
</style>