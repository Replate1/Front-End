import React, { useContext, useState } from "react";
import Account from "./components/Account";
import Header from "./components/Header";

// import { ModelContext } from "../Context/ModelContext";
// const Dashboard = () => {
//   return (
//   <div>
//       <h1>Dashboard</h1>
//   </div>
  
//   )
// };

initialState = {
  user_type: "",
  userId: "",
  pickups: [

  ]
}

const Dashboard = props => {
// const [names, setNames] = useState([
//     {
//       id: 0,
//       name: "Deepu"
//     },
//     {
//       id: 1,
//       name: "Chintu"
//     },
//     {
//       id: 2,
//       name: "Chaman"
//     }
//   ]);

//   const openModel = () => setCurrentModel({ name: "DashboardModal" });

//   const handleNameDelete = id =>
//     setCurrentModel({
//       name: "ConfirmModal",
//       props: {
//         title: "Confirm Delete",
//         cb: () => {
//           setNames(names.filter(n => n.id !== id));
//           setCurrentModel(null);
//         }
//       }
//     });

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <button onClick={openModel}>Open Modal</button>
      <hr />
      {names.map(n => (
        <p key={n.id}>
          {n.name} - <span onClick={() => handleNameDelete(n.id)}>DELETE</span>
        </p>
      ))} */}
      {/* {? user_type === '1'&& !isLoading &&  {
      <UserPickups props={} />
      }} : {<BusinessPickups props={}}
      <button onClick={() => localStorage.getItem('token') set: null props.history.push('/login')}

      <BusinessPickups props={} /> */}
    </div>
  );
};

export default Dashboard;