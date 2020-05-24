<template>
  <div class="all">
    <Add v-on:addUser="addUser" v-on:cancel="removeAddUser" v-bind:AddKey.sync="AddKey" />
    <Edit v-bind:User="Currentuser" v-on:editUser="editUser" v-on:cancel="removeEditUser" v-bind:EditKey.sync="EditKey" />
    <AddMoney v-bind:User="Currentuser" v-on:AddCurrencyUser="AddCurrency" v-bind:AddCurrencyKey.sync="AddCurrencyKey" v-on:cancel="removeAddCurrencyUser" />
    <template v-if="StampKey">
    <Transaction v-on:Stamp="stampAll" v-on:cancel="removeStamp" v-bind:selectedUsers="Selected" v-bind:StampKey.sync="StampKey" v-bind:ArraySize.sync="arrayCount" />
    </template>
    <md-table v-model="Users" md-card @md-selected="OnSelect">
      <md-table-toolbar>
        <md-button class="button md-raised md-accent cancel" id='toggle' v-on:click='AddStamps' disabled>Stempel</md-button>
        </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
        <md-table-cell md-label="Naam" md-sort-by="name">{{ item.Name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.EmailAddress }}</md-table-cell>
        <md-table-cell md-label="geld over">{{ item.Wealth }}</md-table-cell>
        <md-table-cell md-label="Geld toevoegen" md-sort-by="title"><md-button class="md-raised md-primary" v-on:click="enableAddCurrencyPerUser(item)">Geld toevoegen</md-button></md-table-cell>
        <md-table-cell md-label="wijzigen"><md-button class="md-raised md-primary" v-on:click="enableEditUser(item)">Edit</md-button></md-table-cell>
        <md-table-cell md-label="verwijderen"><md-button class="md-raised md-primary" v-on:click="deleteUser(item.id)">Delete</md-button></md-table-cell>
      </md-table-row> 
    </md-table>
    <md-button class="md-fab md-primary addbutton" v-on:click="AddPrompt">
      <md-icon>+</md-icon>
    </md-button>
  </div>
</template>

<script>
import Add from "./Add";
import Edit from "./User/Edit";
import axios from "axios";
import AddMoney from "./User/AddMoney";
import Transaction from '../Transaction'
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Users",
  components: {
    Add,
    Edit,
    AddMoney,
    Transaction
  },
  data() {
    return {
      Users: [],
      Selected: [],
      Currentuser: {},
      EditKey: false,
      EditDialog: false,
      AddCurrencyKey: false,
      AddKey: false,
      AddDialog: false,
      StampKey: false,
      StampDialog: false,
      arrayCount: Number,
      test: Number,


    };
  },
  methods: {
    deleteUser(id) {
      axios.delete("https://localhost:44306/api/User/" + id, {
        headers: { Authorization: `Bearer  ${this.token}` }
      });
      this.Users = this.Users.filter(user => user.id !== id);
    },
    enableEditUser(Currentuser) {
      this.Currentuser = Currentuser;
      this.EditKey = true;
    },
    enableAddCurrencyPerUser(Currentuser) {
      this.Currentuser = Currentuser;
      this.AddCurrencyKey = true;
    },
    editUser(updatedUser) {
      let obj = this; // I hate this.
      axios
        .put(
          "https://localhost:44306/api/User",
          {
            id: updatedUser.id,
            Name: updatedUser.Name,
            Password: updatedUser.Password,
            EmailAddress: updatedUser.EmailAddress,
            Active: updatedUser.Active
          },
          { headers: { Authorization: `Bearer ${this.token}` } }
        ).then(function(){ 
        obj.$emit("rerender");
        })
    },
    removeEditUser() {
      this.EditKey = false;
    },
    removeAddUser() {
      this.AddKey = false;
    },
    removeAddCurrencyUser() {
      this.AddCurrencyKey = false;
    },
    removeStamp() {
      this.StampKey = false;
    },
    AddPrompt() {
      this.AddKey = true;
    },
    AddStamps(){  
      this.StampKey = true;
    },
    addUser(newUser) {
      let obj = this; // I hate this.
      axios
        .post(
          "https://localhost:44306/api/User",
          {
            Username: newUser.Name,
            Password: newUser.Password,
            EmailAddress: newUser.Emailaddress
          },
          { headers: { Authorization: `Bearer ${this.token}` } }
        ).then(function(){
        obj.$emit("rerender");
        })
    },
    AddCurrency(Transaction) {
      let obj = this;
      axios
        .post(
          "https://localhost:44306/api/Transaction",
          {
            Amount: Transaction.Amount,
            UserID: Transaction.UserID,
            SubmittedUserID: this.loginuser.UserId
          },
          { headers: { Authorization: `Bearer ${this.token}` } }
        ).then(function(){
          console.log('hits')
        obj.$emit("rerender");
        })
    },
  async OnSelect(items){
    this.Selected = items;
      if(items[0] == null){
        document.getElementById('toggle').disabled = true;
      }
      else{
        document.getElementById('toggle').disabled = false;
      }
    },
    stampAll(stamping){
      axios.post("https://localhost44306/api/Transaction")
  },
    ...mapActions(["RequestToken"])
  },
  
  computed: {
    ...mapGetters([
            'loginuser',
            'token'
        ]),
    ...mapState({
      token: state => state.token.token,
      loginuser: state => state.loginuser
    }),
    
  },
  async created() {
    const response = await axios
      .get("https://localhost:44306/api/User", {
        headers: { Authorization: `Bearer ${this.token}` }
      })
      .then(resp => {
        return resp;
      });
    this.Users = response.data;
    this.arrayCount = response.data.length;

  },
};
</script>

<style scoped>
.table {
  min-width: 100%;
}
.defaultDisabled {
  display: none;
}
.addbutton {
  float: right;
  margin-right: 2.5%;
  margin-top: 1%;
}
</style>
