import './Button.css'

export default function Button(props){
  return (
    <>
      <button id="app-btn" type="button" onClick={props.onClick}>Convert</button>
    </>
  )
}