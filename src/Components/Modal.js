import React from 'react';
import { useState } from 'react';
import './Modal.css';

function Modal({ modalStatePortal }) {
  const [operatorflag, setOperatorflag] = useState(false);
  const [operator, setOperator] = useState(' ');
  const [equalsflag, setEqualsflag] = useState('');

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');

  const numbr_btns = [];
  const opert_btns = [];

  const handleOperator = (value) => {
    if (operatorflag) {
      alert('An operator is already selected, please clear.');
    } else {
      setOperator(value);
      setOperatorflag(true);
    }

  };

  function handleCalculation() {

    if (equalsflag === '') {

      if (operator === '+') {
        setSum(parseInt(number1) + parseInt(number2));
        setEqualsflag('=');

      } else if (operator === '-') {
        setSum(parseInt(number1) - parseInt(number2));
        setEqualsflag('=');

      } else if (operator === 'x') {
        setSum(parseFloat((parseFloat(number1) * parseFloat(number2)).toFixed(3)));
        setEqualsflag('=');

      } else if (operator === '%') {
        setSum(parseFloat((parseFloat(number1) / parseFloat(number2)).toFixed(3)));
        setEqualsflag('=');
      } else {
        alert('Select an operator first');
      }

    } else {
      alert("Clear first before retrying");
    }

  }

  function clear() {
    setOperator(' ');
    setOperatorflag(false);
    setEqualsflag('');
    setNumber1('');
    setNumber2('');
    setSum('');
  }

  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', '.'].forEach(i => {
    numbr_btns.push(
      <div>
        <button className="fit font" onClick={e => {
          if (equalsflag === '') {
            if (operatorflag) {
              setNumber2(number2 + e.target.value);
            } else {
              setNumber1(number1 + e.target.value);
            }
          }
        }}
          value={i}
          key={i}>
          {i}
        </button>
      </div>
    )
  });

  ['+', '-', 'x', '%'].forEach(i => {
    opert_btns.push(
      <div>
        <button className="fit font" onClick={e => handleOperator(e.target.value)}
          value={i}
          key={i}>
          {i}
        </button>
      </div>
    )
  });


  return (

    <div id='modalScreen'>

      <div id='output'>
        <div className='font' id='output_Top'>
          {number1} {operator} {number2} {equalsflag}
        </div>
        <div dir="rtl" className='font' id='output_Bottom'>
          {sum}
        </div>
      </div>

      <div className="screen">
        <div id='container-numbr' class='grid-numbr'>
          {numbr_btns}
        </div>
        <div id='container-opert' class='grid-opert'>
          {opert_btns}
        </div>
        <div id='container-funct' class='grid-funct'>
          <div>
            <button id='equals' className='fit ' onClick={() => handleCalculation()}>=</button>
          </div>
          <div>
            <button id='clear' className='fit ' onClick={() => clear()}>clr</button>
          </div>
        </div>
      </div>

      <button id='close' class='foot' onClick={() => modalStatePortal(false)}>Close</button>

    </div>

  )
}

export default Modal