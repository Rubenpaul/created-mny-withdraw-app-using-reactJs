// Write your code here
import './index.css'

const DenominationItem = props => {
  const {userDetails, withdrawAmount} = props
  const {value} = userDetails
  const onDenomination = () => {
    withdrawAmount(value)
  }
  return (
    <li className="list-item">
      <button className="button" type="submit" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
