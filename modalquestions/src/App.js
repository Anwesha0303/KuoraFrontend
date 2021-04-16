import Modal from './Components/Modal';
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

     return(
      <div>
         {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
         <button onClick ={() => setShow(true)} className="btn-openModal">Add Question</button>
          <Modal show={show} close={closeModalHandler}/>
          </div>
  );
}

export default App;
