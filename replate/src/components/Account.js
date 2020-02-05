import React, { useContext } from "react";
import { ModelContext } from "../Context/ModelContext";

export default props => {
  const { setCurrentModel } = useContext(ModelContext);

  const openModel = () => setCurrentModel({ name: "AccountModal" });
  return (
    <div>
      <p>Account</p>
      <button onClick={openModel}>Open Modal</button>
    </div>
  );
};