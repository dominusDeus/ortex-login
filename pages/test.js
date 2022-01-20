import { useState, useEffect } from "react";

const test = () => {
  const [modalIsActive, setModalIsActive] = useState("");

  const activeModal = () => {
    debugger;
    setModalIsActive("is-active");

  }

  const deactiveModal = () => {
    setModalIsActive("");
  }

  // let isActive = "";
  // useEffect (()=>{
  //   debugger;
  //   if (modalIsActive) {
  //     isActive = "is-active";
  //   }
  //   else {
  //     isActive = ""
  //   }
  // }, [modalIsActive]) 
 
  return(
    <>
      <button onClick={activeModal}>
        click
      </button>
      <div className={`modal ${modalIsActive}`}>
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Modal title</p>
      <button className="delete" onClick={deactiveModal} aria-label="close"></button>
    </header>
    <section className="modal-card-body">
     holis
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success" onClick={deactiveModal}>Save changes</button>
      <button className="button" onClick={deactiveModal}>Cancel</button>
    </footer>
  </div>
</div>
    </>
  )
}

export default test;