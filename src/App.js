import './App.css';
import { useState } from 'react'
import Modal from "./Components/Modal";

function App() {

  const [modalState, setModalState] = useState(false);

  return (
    <div>
      <div id = 'title'>
        <h1> Click the button below to open Calculator App </h1>
      </div>

      <div id = 'align'>
        <button id='btn' onClick={() => setModalState(true)}> Click here! </button>
        {modalState && <Modal modalStatePortal={setModalState} />}
      </div>
    </div>
  );
}

export default App;
