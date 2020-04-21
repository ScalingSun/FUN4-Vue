import axios from 'axios';

const state = {
    UserId: Number,
    Username: String,
    Wealth: Number,
    EmailAddress: String,
    Active: Number,

};

const getters = {
    Username: (state) => state.Username,
};

const actions = {
   async requestUserdata(state, Id){
            await axios.get('https://localhost:44306/api/user/' + Id,{ headers: {"Authorization" : `Bearer ${state.getters.token}`}})
            .then(function (response) {
            state.commit('SetUserdata', response.data)
          })
          .catch(function (error) {
            if(error.response.status == 401){
                return null;
            }
          })
        }
}

const mutations = {
    SetUserdata:(state,userdata) => (state.UserId = userdata.id, state.Username = userdata.Name, state.Wealth = userdata.Wealth,state.Active = userdata.Active,state.EmailAddress = userdata.EmailAddress )
};

export default {
    state,
    getters,
    actions,
    mutations
}