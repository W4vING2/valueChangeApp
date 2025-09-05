import './Input.css'

export default function Input(props){
  return (
    <>
      <input disabled={props.isDisabled} value={props.newValue ? props.newValue : props.value} onChange={props.onChange} type="number" id="app-input" placeholder="Enter a value" />
    </>
  )
}