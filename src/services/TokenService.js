import axios from 'axios'

const API_URL = 'http://localhost:51086/api/'

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
          console.log(JSON.parse(localStorage.getItem('user')))
        }
        return response.data
      })
  }

  logout() {
    localStorage.removeItem('user')
  }
}

export default new TokenService()