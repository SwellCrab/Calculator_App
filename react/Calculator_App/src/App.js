import './App.css';
import { useState } from 'react'

function App() {


  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);
  const [display, setDisplay] = useState(0);

  function handleDisplay() {
    setDisplay(sum);
  }

  const handleChangeNum1 = event => {
    const strToInt = parseInt(event.target.value);
    setNumber1(strToInt);
  }
  const handleChangeNum2 = event => {
    const strToInt = parseInt(event.target.value);
    setNumber2(strToInt);
  }
  const Add = () => {
    setSum(number1 + number2);
  }
  const Subtract = () => {
    setSum(number1 - number2);
  }

  return (

    <div id='screen'>
      <div id='container'>
        <div id='output'>
          {display}
        </div>
        <div id='body'>
          <div id='input1'>
            <input className='Fit' type="number" onChange={(event)=>handleChangeNum1(event)} value={number1}></input>
          </div>
          <div id='input2'>
            <input className='Fit' type="number" onChange={(event)=>handleChangeNum2(event)} value={number2}></input>
          </div>
          <div id='action_key1'>
          <button className='Fit' onClick={()=>Subtract()}>-</button>
          </div>
          <div id='action_key2'>
          <button className='Fit' onClick={()=>Add()}>+</button>
          </div>
          <div id='action_key3'>
          <button className='Fit' onClick= {()=>handleDisplay()}>=</button>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
