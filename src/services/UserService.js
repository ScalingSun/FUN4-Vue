import axios from 'axios'
const apiClient = 'https://localhost:44306/api/User'

class UserService {
  editUser(updatedUser) {
    axios
      .put(
        apiClient,
        {
          id: updatedUser.id,
          Name: updatedUser.Name,
          Password: updatedUser.Password,
          EmailAddress: updatedUser.EmailAddress,
          Active: updatedUser.Active
        },
        { headers: { Authorization: `Bearer ${this.token}` } }
      )
      .then();
      console.log('im stupid')
      this.EditKey = false; // used to close dialog.
      this.$emit("rerender");
  }
  addUser(newUser) {
    axios
      .post(
        apiClient,
        {
          Username: newUser.Name,
          Password: newUser.Password,
          EmailAddress: newUser.Emailaddress
        },
        { headers: { Authorization: `Bearer ${this.token}` } }
      ).then();
    this.$emit("rerender");
  }
  deleteUser(id) {
    axios.delete(apiClient + id, {
      headers: { Authorization: `Bearer  ${this.token}` }
    });
    this.Users = this.Users.filter(user => user.id !== id);
  }
 async GetAllUsers(){
  let response = await axios
    .get(apiClient, {
      headers: { Authorization: `Bearer ${this.token}` }
    })
    .then(resp => {
      return resp;
    });
  return response.data;
  }
}

export default new UserService()