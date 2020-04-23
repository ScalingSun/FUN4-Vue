import TokenService from "@/services/TokenService"
const state = {
    token: '',
    userId: Number
};

const getters = {
    token: (state) => state.token,
};

const actions = {
   async RequestToken(state, loginUser){
       const result = await TokenService.RequestToken(loginUser);
            state.commit('setToken', result.data);
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