import React from "react";
import styles from "./modal.module.css";
export const Modal = ({ handleModal }) => {
  return (
    <div className={styles.modal} onClick={(e)=>handleModal(e)}>
      <div>
        <button onClick={(e)=> handleModal(e)}>Close</button>

        <div>cdbaskgcvdsa</div>
        <div>cdbaskgcvdsa</div>
        <div>cdbaskgcvdsa</div>
        <div>cdbaskgcvdsa</div>
      </div>
    </div>
  );
};
