<template>
  <div class="all">
    <Add v-on:addUser="addUser" v-on:cancel="removeAddUser" v-bind:AddKey.sync="AddKey" />
    <Edit v-bind:User="Currentuser" v-on:editUser="editUser" v-on:cancel="removeEditUser" v-bind:EditKey.sync="EditKey" />
      <AddMoney v-bind:User="Currentuser" v-on:AddCurrencyUser="AddCurrency" v-bind:AddCurrencyKey.sync="AddCurrencyKey" v-on:cancel="removeAddCurrencyUser" />
    <md-table v-model="Users" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
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
import AddMoney from "./User/AddMoney";
import UserService from '../../services/UserService.js'
import TransactionService from '../../services/TransactionService.js'
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Users",
  components: {
    Add,
    Edit,
    AddMoney
  },
  data() {
    return {
      Users: [],
      Currentuser: {},
      EditKey: false,
      EditDialog: false,
      AddCurrencyKey: false,
      AddKey: false,
      AddDialog: false
    };
  },
  methods: {
    enableEditUser(Currentuser) {
      this.Currentuser = Currentuser;
      this.EditKey = true;
    },
    enableAddCurrencyPerUser(Currentuser) {
      this.Currentuser = Currentuser;
      this.AddCurrencyKey = true;
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
    AddPrompt() {
      this.AddKey = true;
    },
    EditUser(UpdatedUser){
      this.UserService.EditUser(UpdatedUser);
    },
    AddUser(NewUser){
      this.UserService.EditUser(NewUser);
    },
    DeleteUser(UserID){
      UserService.DeleteUser(UserID);
    },
    AddCurrency(Transaction){
      TransactionService.AddCurrency(Transaction)
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
    })
  },
  created() {
    this.Users = UserService.GetAllUsers();
  }
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
