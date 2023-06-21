import './App.css';
import { useState } from 'react'

function App() {


  
  const [operatorflag,setOperatorflag]=useState(false);
  const [operator,setOperator]= useState(-1);

  const [floater, setFloater] = useState('');

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);
  const [displayTop, setDisplayTop] = useState(0);
  const [displayBottom, setDisplayBottom] = useState(0);

  function handleDisplayTop() {
    setDisplayTop(number1);
  }
  function handleDisplayBottom() {
    setDisplayBottom(number2);
  }

  function set1() {
    setFloater('1');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }
  function set2() {
    setFloater('2');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }
  function set3() {
    setFloater('3');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }
  function set4() {
    setFloater('4');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }
  function set5() {
    setFloater('5');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }
  function set6() {
    setFloater('6');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }
  function set7() {
    setFloater('7');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }
  function set8() {
    setFloater('8');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }
  function set9() {
    setFloater('9');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }
  function set0() {
    setFloater('0');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }
  function set00() {
    setFloater('00');
    if (operatorflag) {
      buildNum2();
      handleDisplayBottom();
    } else {
      buildNum1();
      handleDisplayTop();
    }
  }

  function calculation(){
    switch(operator){
      case '0':     
      setSum(parseInt(number1) + parseInt(number2));
      handleDisplayBottom();

      case '1':
        setSum(parseInt(number1) - parseInt(number2));
        handleDisplayBottom();

      case '2':


      case '3':

      default:
        alert("DBAD");
      
    }


  }

  function buildNum1() {
    setNumber1(number1 + floater);
  }
  function buildNum2() {
    setNumber2(number2 + floater);
  }

  // const handleChangeNum1 = event => {
  //   const strToInt = parseInt(event.target.value);
  //   setNumber1(strToInt);
  // }
  // const handleChangeNum2 = event => {
  //   const strToInt = parseInt(event.target.value);
  //   setNumber2(strToInt);
  // }
  function add() {
    setOperatorflag(true);
    setOperator(0);
  }
  function subtract() {
    setOperatorflag(true);
    setOperator(1);
  }
  function multiply() {
    setOperatorflag(true);
    setOperator(3);
  }
  function divide() {
    setOperatorflag(true);
    setOperator(4);
  }

  function clears() {

  }


  return (

    <div id='screen'>
      <div id='container'>

        <div id='body'>


          <div id='output_Top'>
            {displayTop}
          </div>
          <div id='output_Bottom'>
            {displayBottom}
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
            <button className='Fit' onClick={() => add()}>+</button>
          </div>
          {/* - */}
          <div id='action_key_minus'>
            <button className='Fit' onClick={() => subtract()}>-</button>
          </div>
          {/* x */}
          <div id='action_key_multiply'>
            <button className='Fit' onClick={() => multiply()}>x</button>
          </div>
          {/* % */}
          <div id='action_key_divide'>
            <button className='Fit' onClick={() => divide()}>%</button>
          </div>
          {/* = */}
          <div id='action_key_equals'>
            <button className='Fit' onClick={() => calculation()}>=</button>
          </div>
          {/* clr */}
          <div id='action_key_clear'>
            <button className='Fit' onClick={() => clears()}>clr</button>
          </div>
          {/* 1 */}
          <div id='action_key_1'>
            <button className='Fit' onClick={() => set1()}>1</button>
          </div>
          {/* 2  */}
          <div id='action_key_2'>
            <button className='Fit' onClick={() => set2()}>2</button>
          </div>
          {/* 3  */}
          <div id='action_key_3'>
            <button className='Fit' onClick={() => set3()}>3</button>
          </div>
          {/* 4  */}
          <div id='action_key_4'>
            <button className='Fit' onClick={() => set4()}>4</button>
          </div>
          {/* 5  */}
          <div id='action_key_5'>
            <button className='Fit' onClick={() => set5()}>5</button>
          </div>
          {/* 6  */}
          <div id='action_key_6'>
            <button className='Fit' onClick={() => set6()}>6</button>
          </div>
          {/* 7  */}
          <div id='action_key_7'>
            <button className='Fit' onClick={() => set7()}>7</button>
          </div>
          {/* 8  */}
          <div id='action_key_8'>
            <button className='Fit' onClick={() => set8()}>8</button>
          </div>
          {/* 9  */}
          <div id='action_key_9'>
            <button className='Fit' onClick={() => set9()}>9</button>
          </div>
          {/* 0  */}
          <div id='action_key_0'>
            <button className='Fit' onClick={() => set0()}>0</button>
          </div>
          {/* 00  */}
          <div id='action_key_00'>
            <button className='Fit' onClick={() => set00()}>00</button>
          </div>



        </div>

      </div>
    </div>

  );
}

export default App;
