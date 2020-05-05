import axios from 'axios';

const state = {
    token: '',
    userId: Number
};

const getters = {
    token: (state) => state.token,
};

const actions = {
   async RequestToken(state, loginUser){
                await axios.post('https://localhost:44306/api/login',{
                Password: loginUser.Password, // SuperHeavyPassword
                emailaddress: loginUser.Emailaddress// Admin@Admin.com
        })
        .then(function (response) {
            state.commit('setToken', response.data)
          })
          
          .catch(function () {
                return null;
          })
        }
}

const mutations = {
    setToken:(state,token) => (state.token = token.token, state.userId = token.userId)
};

export default {
    state,
    getters,
    actions,
    mutations
}