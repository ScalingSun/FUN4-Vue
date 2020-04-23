import axios from 'axios'

const API_URL = 'https://localhost:44306/api/'

class TokenService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        EmailAddress: user.Emailaddress,
        Password: user.Password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data))
        
        }
        return response.data
      }).catch(error => {
        console.log(error)
      })
  } 
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

  logout() {
    localStorage.removeItem('user')
  }
}

export default new TokenService()