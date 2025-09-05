import './index.css'
import Input from "./components/Input/Input.jsx";
import Select from "./components/Select/Select.jsx";
import Button from "./components/Button/Button.jsx";
import {useState} from "react";

export default function App() {
  const [inputUSD, setInputUSD] = useState(0)
  const [value, setValue] = useState(0)
  const [currency, setCurrency] = useState('RUB')

  function inputChange(event){
    setInputUSD(event.target.value)
  }

  function onBtnClick(){
    fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_AkMTiZ15UbDpzo16u2b8g975XKGaMh62DKwmqmAE')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        const countyValue = json.data[currency]?.value;

        if (countyValue) {
          const converted = countyValue * inputUSD;
          setValue(Math.ceil(converted));
        }
        })
      }

  return (
    <>
      <h1>Change Value App</h1>
      <Select isDisabled/>
      <Input value={inputUSD} onChange={inputChange}/>
      <Select value={currency} onChange={(e) => {
        setCurrency(e.target.value)
        setValue(0)
      }}/>
      <Input value={value} isDisabled/>
      <Button onClick={onBtnClick}/>
    </>
  )
}