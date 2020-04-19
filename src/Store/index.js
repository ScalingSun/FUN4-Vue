import vuex from 'vuex';
import vue from 'vue';
import token from './modules/token.js';
import loginuser from './modules/loginuser.js'
vue.use(vuex);

export default new vuex.Store({
    modules:{
        token,
        loginuser
        }
    }
);