import './Select.css'
import Input from "../Input/Input.jsx";

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
      </select>
    </>
  )
}