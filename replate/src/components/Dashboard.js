import React, { useContext, useState } from "react";
import { ModelContext } from "../Context/ModelContext";

// const Dashboard = () => {
//   return (
//   <div>
//       <h1>Dashboard</h1>
//   </div>
  
//   )
// };

// export default Dashboard;

// Dashboard code start

const Dashboard = props => {
const [names, setNames] = useState([
    {
      id: 0,
      name: "Deepu"
    },
    {
      id: 1,
      name: "Chintu"
    },
    {
      id: 2,
      name: "Chaman"
    }
  ]);

  const openModel = () => setCurrentModel({ name: "DashboardModal" });

  const handleNameDelete = id =>
    setCurrentModel({
      name: "ConfirmModal",
      props: {
        title: "Confirm Delete",
        cb: () => {
          setNames(names.filter(n => n.id !== id));
          setCurrentModel(null);
        }
      }
    });

  return (
    <div>
      <p>Dashboard</p>
      <button onClick={openModel}>Open Modal</button>
      <hr />
      {names.map(n => (
        <p key={n.id}>
          {n.name} - <span onClick={() => handleNameDelete(n.id)}>DELETE</span>
        </p>
      ))}
    </div>
  );
};

export default Dashboard;