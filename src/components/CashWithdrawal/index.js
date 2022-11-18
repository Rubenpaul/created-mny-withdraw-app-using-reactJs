// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdrawAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  //

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="container">
          <div className="name-container">
            <div className="name-logo">RP</div>
            <h1 className="name-heading">Ruben Paul</h1>
          </div>
          <div className="balance-container">
            <div className="balance-card">
              <p className="balance-heading">Your balance</p>
              <p className="balance-amount">{amount}</p>
            </div>
            <p className="rupee-text">In Rupees</p>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-container">
            {denominationsList.map(eachUser => (
              <DenominationItem
                userDetails={eachUser}
                key={eachUser.id}
                withdrawAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
