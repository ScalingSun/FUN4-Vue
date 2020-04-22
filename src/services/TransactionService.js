import axios from 'axios'
const API_URL = 'http://localhost:51086/api/transaction'

class TransactionService {
  AddCurrency(Transaction) {
    console.log(Transaction)
  axios
    .post(
      API_URL + "Transaction",
      {
        Amount: Transaction.Amount,
        UserID: Transaction.UserID,
        SubmittedUserID: this.loginuser.UserId
      },
      { headers: { Authorization: `Bearer ${this.token}` } }
    )
    .then();
  this.$emit("rerender");
  }
}

export default new TransactionService()