<template>
    <div class="all">
        <Add v-on:addUser="addUser"/><br/>
        <div v-if="Editkey === true" >
            <Edit v-bind:User='Currentuser' v-on:editUser="editUser" v-on:cancel="removeEditUser" />
        </div>
        <div v-if="AddCurrencyKey === true" >
            <AddMoney v-bind:User='Currentuser' v-on:AddCurrencyUser="AddCurrency" v-on:cancel="removeAddCurrencyUser" />
        </div>
        <table class="table">
            <th>Id</th>
            <th>Name</th>
            <th>Emailadres</th>
            <th>Wealth</th>
            <th>Active</th>
            <th>Add</th>
            <th>Edit</th>
            <th>Delete</th>
        <template v-for="user in Users">
            <User v-bind:key='user.Id' v-bind:User="user" v-on:deleteUser="deleteUser" v-on:editUser="enableEditUser" v-on:enableAddCurrencyPerUser="enableAddCurrencyPerUser" />
        </template>
        </table>
    </div>
</template>

<script>
import Add from "./Add";
import Edit from './User/Edit';
import User from "./User/User";
import axios from 'axios';
import AddMoney from './User/AddMoney';
import { mapGetters, mapActions,mapState } from 'vuex';

export default {
    name:'Users',
    components:{
    Add,
    User,
    Edit,
    AddMoney

    },
    data(){
       return {
           Users:[],
           Currentuser:[],
           Editkey:false,
           AddCurrencyKey: false,
       }
    },
    methods:{
        deleteUser(id){
            axios.delete('https://localhost:44306/api/User/'+ id, {
                headers: {"Authorization" : `Bearer  ${this.token}`}})
            this.Users = this.Users.filter(user => user.id !== id);
        },
        enableEditUser(Currentuser){
            this.Currentuser = Currentuser;
            this.Editkey = true;
        },
        enableAddCurrencyPerUser(Currentuser){
            console.log('this gets called')
            this.Currentuser = Currentuser;
            this.AddCurrencyKey = true;
        },
        editUser(updatedUser){
            axios.put('https://localhost:44306/api/User',
            {
                id:updatedUser.id,
                Name: updatedUser.Name,
                Password: updatedUser.Password,
                EmailAddress:updatedUser.EmailAddress,
                Active:updatedUser.Active
            },
            { headers: {"Authorization" : `Bearer ${this.token}`}}).then()
            this.$emit('rerender');
        },
        removeEditUser(){
            this.Editkey = false;
        },
        removeAddCurrencyUser(){
            this.AddCurrencyKey = false;
        },
        addUser(newUser){
            axios.post('https://localhost:44306/api/User', 
            {
                Username: newUser.Name,
                Password: newUser.Password,
                EmailAddress:newUser.Emailaddress
            },
            { headers: {"Authorization" : `Bearer ${this.token}`}}).then()
            this.$emit('rerender');
        },
        AddCurrency(Transaction){
            axios.post('https://localhost:44306/api/Transaction',
            {
                Amount: Transaction.Amount,
                UserID: Transaction.Id,
                SubmittedUserID: "test"
            },
            { headers: {"Authorization" : `Bearer ${this.token}`}}).then()
            this.$emit('rerender');
        },
        ...mapActions(['RequestToken'])
    },
    computed:{
        ...mapGetters([
            'token'
        ]),
        ...mapState({
            token: state => state.token.token
        })
    },
     async created(){
        const response = await axios.get('https://localhost:44306/api/User', { headers: {"Authorization" : `Bearer ${this.token}`} }).then(resp => {return resp});
        this.Users = response.data;
    }
}

</script>

<style scoped>
.all{
    text-align:center;
    min-width:100%;
}
table{
    margin-left:auto;
    margin-right:auto;
    background-color:#42b983;
}
table, th, td {
  border: 1px solid black;
}
.table{
    min-width:100%;
}
.defaultDisabled{
    display:none;
}
</style>
