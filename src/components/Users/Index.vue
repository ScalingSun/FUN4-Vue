<template>
    <div class="all">
        <template v-if="AddKey"><Add v-on:addUser="addUser"/></template>
        <div v-if="Editkey === true" >
            <Edit v-bind:User='Currentuser' v-on:editUser="editUser" v-on:cancel="removeEditUser" />
        </div>
        <div v-if="AddCurrencyKey === true" >
            <AddMoney v-bind:User='Currentuser' v-on:AddCurrencyUser="AddCurrency" v-on:cancel="removeAddCurrencyUser" />
        </div>
        <md-table class="table">
            <md-table-row>
                <md-table-head>Id</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head>Emailadres</md-table-head>
                <md-table-head>Wealth</md-table-head>
                <md-table-head>Active</md-table-head>
                <md-table-head>Add</md-table-head>
                <md-table-head>Edit</md-table-head>
                <md-table-head>Delete</md-table-head>
            </md-table-row>
        <template v-for="user in Users">
            <User v-bind:key='user.Id' v-bind:User="user" v-on:deleteUser="deleteUser" v-on:editUser="enableEditUser" v-on:enableAddCurrencyPerUser="enableAddCurrencyPerUser" />
        </template>
        </md-table>
        <md-button class="md-fab md-primary addbutton" v-on:click="AddPrompt">
            <md-icon>+</md-icon>
      </md-button>
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
           AddKey: false
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
        AddPrompt(){
            this.AddKey = true;
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
.table{
    min-width:100%;
}
.defaultDisabled{
    display:none;
}
.addbutton{
    float:right;
    margin-right:2.5%;
    margin-top:1%;
}
</style>
