import './App.css';
import { useState } from 'react'

function App() {



  const [operatorflag,setOperatorflag]=useState(false);
  const [operator,setOperator]= useState('none');

  // const [floater, setFloater] = useState('');

  const [number1, setNumber1] = useState(0); 
  const [number2, setNumber2] = useState(0); 
  const [sum, setSum] = useState(''); 

  const [fromButtons, setFromButtons] = useState('');

  const [displayTop, setDisplayTop] = useState(0);
  const [displayBottom, setDisplayBottom] = useState(0);

  const handleButtonClick = (value) => {
    setFromButtons(fromButtons + value);
    const temp = parseInt(fromButtons + value);
    if (operatorflag){
      setNumber2(temp);  
    }else{
      setNumber1(temp);
    }
  };

  const handleOperator = (value) => {
    if (operatorflag)
    {
      alert('An operator is already selected, please clear.');
    }else{
      setOperator(value);
      setOperatorflag(true);
      setFromButtons('');
      
    }

  };

  function handleCalculation() {
    // switch ('add') {
    //   case 'add':

    //   case 'subtract':
    //     setSum(parseInt(number1) - parseInt(number2));
    //     handleDisplayBottom();

    //   case 'multiply':


    //   case 'divide':

    //   case 'nonce':
    //     alert("DBAD");
    //   default:
    //     alert("eeeeee")

    // }

    if (operator == 'add'){
      setSum(number1 + number2);
      handleDisplayBottom();      

    }else if(operator == 'subtract'){
      setSum(parseInt(number1) - parseInt(number2));
      handleDisplayBottom();

    }else if(operator == 'multiply'){

    }else if(operator == 'divide'){

    }else{
      alert('ddddd');
    }
  }



  function handleDisplayTop() {
    setDisplayTop(number1);
  }
  function handleDisplayBottom() {
    setDisplayBottom(sum);
  }

  function empty(){

  }







  // const handleChangeNum1 = event => {
  //   const strToInt = parseInt(event.target.value);
  //   setNumber1(strToInt);
  // }
  // const handleChangeNum2 = event => {
  //   const strToInt = parseInt(event.target.value);
  //   setNumber2(strToInt);
  // }



  return (

    <div id='screen'>
      <div id='container'>

        <div id='body'>


          <div id='output_Top'>
            {number1} {operator} {number2}
          </div>
          <div id='output_Bottom'>
            {sum}
          </div>

          {/* <div id='input1'>
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
          </div> */}
          {/* + */}
          <div id='action_key_add'>
            <button className='Fit' onClick={() => handleOperator('add')}>+</button>
          </div>
          {/* - */}
          <div id='action_key_minus'>
            <button className='Fit' onClick={() => handleOperator('subtract')}>-</button>
          </div>
          {/* x */}
          <div id='action_key_multiply'>
            <button className='Fit' onClick={() => handleOperator('multiply')}>x</button>
          </div>
          {/* % */}
          <div id='action_key_divide'>
            <button className='Fit' onClick={() => handleOperator('divide')}>%</button>
          </div>
          {/* = */}
          <div id='action_key_equals'>
            <button className='Fit' onClick={() => handleCalculation()}>=</button>
          </div>
          {/* clr */}
          <div id='action_key_clear'>
            <button className='Fit' onClick={() => empty()}>clr</button>
          </div>
          {/* 1 */}
          <div id='action_key_1'>
            <button className='Fit' onClick={() => handleButtonClick('1')}>1</button>
          </div>
          {/* 2  */}
          <div id='action_key_2'>
            <button className='Fit' onClick={() => handleButtonClick('2')}>2</button>
          </div>
          {/* 3  */}
          <div id='action_key_3'>
            <button className='Fit' onClick={() => handleButtonClick('3')}>3</button>
          </div>
          {/* 4  */}
          <div id='action_key_4'>
            <button className='Fit' onClick={() => handleButtonClick('4')}>4</button>
          </div>
          {/* 5  */}
          <div id='action_key_5'>
            <button className='Fit' onClick={() => handleButtonClick('5')}>5</button>
          </div>
          {/* 6  */}
          <div id='action_key_6'>
            <button className='Fit' onClick={() => handleButtonClick('6')}>6</button>
          </div>
          {/* 7  */}
          <div id='action_key_7'>
            <button className='Fit' onClick={() => handleButtonClick('7')}>7</button>
          </div>
          {/* 8  */}
          <div id='action_key_8'>
            <button className='Fit' onClick={() => handleButtonClick('8')}>8</button>
          </div>
          {/* 9  */}
          <div id='action_key_9'>
            <button className='Fit' onClick={() => handleButtonClick('9')}>9</button>
          </div>
          {/* 0  */}
          <div id='action_key_0'>
            <button className='Fit' onClick={() => handleButtonClick('0')}>0</button>
          </div>
          {/* 00  */}
          <div id='action_key_00'>
            <button className='Fit' onClick={() => handleButtonClick('00')}>00</button>
          </div>



        </div>

      </div>
    </div>

  );
}

export default App;
