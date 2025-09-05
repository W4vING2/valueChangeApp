import './Select.css'

export default function Select(props){
  return (
    <>
      <select
        value={props.value}
        onChange={props.onChange}
        name="app-select"
        id="app-select"
        disabled={props.isDisabled}
      >
        {props.isDisabled && <option value="USD">USD</option>}
        <option value="RUB">RUB</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="GBP">GBP</option>
      </select>
    </>
  )
}