import React from "react";
import styles from "./navbar.module.css";
import { Modal } from "./Modal";
import { useState } from "react";
export const Navbar = () => {
  const [modal,setModal]=useState(true);
  const handleModal=(event)=>{
    setModal(!modal)
    event.stopPropagation();

  }
  return (
    <>
      {modal && <Modal handleModal={handleModal}></Modal> }
      
      <div className={styles.main}>
        <img src="/logo2.png" alt="company Logo" />
        <div className={styles.tabs}>
          <div>Tabs</div>
          <div>Tabs</div>
          <div>Tabs</div>
          <div>Tabs</div>
        </div>
        <div className={styles.profile}>
          <div>Tabs</div>
          <div>Tabs</div>
          <div>Tabs</div>
          <div>Tabs</div>
        </div>
        <div className={styles.hamberger} onClick={handleModal}>=</div>
      </div>
    </>
  );
};
