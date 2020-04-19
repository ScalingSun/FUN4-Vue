<template>
    <div>
        <form class="add oneLine" @submit="Add"> 
            <h3 style="text-align:center">toevoegen gebruiker</h3>
            Naam:
            <input type="text" v-model="Name" class="textbox" size="10" id="Name">
            Wachtwoord:
            <input type="password" v-model="Password" class="textbox" size="10" id="password">
            Emailadres:
            <input type="email" v-model="Emailaddress" class="textbox" id="Emailaddress">
            
            <button class="button">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'Add',
    data(){
        return {
            Name: '',
            Password: '',
            Emailaddress: ''
        }
    },
    methods:{
        Add(e){
            e.preventDefault();
            const newUser = {
                Name: this.Name,
                Password: this.Password,
                Emailaddress: this.Emailaddress,
                Wealth: 0,
                Active: 1
            }
            this.$emit('addUser', newUser);
        }
    }
}

</script>

<style scoped>
.add{
    text-align:left;
    background-color:lightgrey;
    max-height:10%;
    float:left;
    margin-bottom:5%;
    min-width:100%;
    padding-bottom:2%;
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
