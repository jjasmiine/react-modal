import React, { useState } from "react";
import Modal from './Modal'

function App() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <button className="modalBtn" onClick={() => setOpenModal(true)}>Click me</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default App;
