import React from "react";

export default props => {
  return (
    <div className="modal">
      <span onClick={props.closeModel} className="close">
        X
      </span>
      <p>Account Modal</p>
      <p>Watchu wanna do?</p>
      <button>Change Password</button>
    </div>
  );
};