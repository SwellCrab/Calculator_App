
import { useState } from 'react'
import './Modal.css';

function Modal({ modalStatePortal }) {
  const [operatorflag, setOperatorflag] = useState(false);
  const [operator, setOperator] = useState(' ');
  const [equalsflag, setEqualsflag] = useState('');

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');

  const [fromButtons, setFromButtons] = useState('');

  const handleButtonClick = (value) => {
    setFromButtons(fromButtons + value);
    const temp = parseInt(fromButtons + value);
    if (operatorflag) {
      setNumber2(temp);
    } else {
      setNumber1(temp);
    }
  };

  const handleOperator = (value) => {
    if (operatorflag) {
      alert('An operator is already selected, please clear.');
    } else {
      setOperator(value);
      setOperatorflag(true);
      setFromButtons('');

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
    setFromButtons('');
  }

  return (

    <div id = 'modalScreen'>
      <div id='modalContainer'>

        <div className='Font' id='output_Top'>
          {number1} {operator} {number2} {equalsflag}
        </div>
        <div dir="rtl" className='Font' id='output_Bottom'>
          {sum}
        </div>
        {/* + */}
        <div id='action_key_add'>
          <button className='Fit Font' onClick={() => handleOperator('+')}>+</button>
        </div>
        {/* - */}
        <div id='action_key_minus'>
          <button className='Fit Font' onClick={() => handleOperator('-')}>-</button>
        </div>
        {/* x */}
        <div id='action_key_multiply'>
          <button className='Fit Font' onClick={() => handleOperator('x')}>x</button>
        </div>
        {/* % */}
        <div id='action_key_divide'>
          <button className='Fit Font' onClick={() => handleOperator('%')}>%</button>
        </div>
        {/* = */}
        <div id='action_key_equals'>
          <button className='Fit Font equals' onClick={() => handleCalculation()}>=</button>
        </div>
        {/* clr */}
        <div id='action_key_clear'>
          <button className='Fit Font' onClick={() => clear()}>clr</button>
        </div>
        {/* 1 */}
        <div id='action_key_1'>
          <button className='Fit Font' onClick={() => handleButtonClick('1')}>1</button>
        </div>
        {/* 2  */}
        <div id='action_key_2'>
          <button className='Fit Font' onClick={() => handleButtonClick('2')}>2</button>
        </div>
        {/* 3  */}
        <div id='action_key_3'>
          <button className='Fit Font' onClick={() => handleButtonClick('3')}>3</button>
        </div>
        {/* 4  */}
        <div id='action_key_4'>
          <button className='Fit Font' onClick={() => handleButtonClick('4')}>4</button>
        </div>
        {/* 5  */}
        <div id='action_key_5'>
          <button className='Fit Font' onClick={() => handleButtonClick('5')}>5</button>
        </div>
        {/* 6  */}
        <div id='action_key_6'>
          <button className='Fit Font' onClick={() => handleButtonClick('6')}>6</button>
        </div>
        {/* 7  */}
        <div id='action_key_7'>
          <button className='Fit Font' onClick={() => handleButtonClick('7')}>7</button>
        </div>
        {/* 8  */}
        <div id='action_key_8'>
          <button className='Fit Font' onClick={() => handleButtonClick('8')}>8</button>
        </div>
        {/* 9  */}
        <div id='action_key_9'>
          <button className='Fit Font' onClick={() => handleButtonClick('9')}>9</button>
        </div>
        {/* 0  */}
        <div id='action_key_0'>
          <button className='Fit Font' onClick={() => handleButtonClick('0')}>0</button>
        </div>
        {/* 00  */}
        <div id='action_key_00'>
          <button className='Fit Font close' onClick={() => modalStatePortal(false)}>Close</button>
        </div>

      </div>
    </div>

  )
}

export default Modal