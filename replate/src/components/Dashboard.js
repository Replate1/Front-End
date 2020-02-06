import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//components
// import Header from "./components/Header";
import BusinessPickups from "../components/BusinessPickups";
import UserPickups from "../components/UserPickups";

//contexts
import BusinessPickupContext from "../contexts/BusinessPickup";
import UserPickupContext from "../contexts/UserPickup";

const Dashboard = props => {
  console.log("This is from the dashboard " , props);
  const type= localStorage.getItem("type");
  const id = localStorage.getItem("userId");  
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    if (type === "1") {
      axiosWithAuth()
        .get(`/api/pickups/business/${id}`)
        .then(res => {
          // console.log("This is from the .then ", res)
          setPickups(res.data);
        })
        .catch(err => console.log(err));
    } else {
      axiosWithAuth()
        .get(`/api/pickups/volunteer/${id}`)
        .then(res => {
          // console.log("This is from the .then ", res)
          setPickups(res.data);
        })
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {(type === '1') ? (
        <BusinessPickupContext.Provider value={{type, id, pickups}}>
        <BusinessPickups {...props}/>
        <h1>BusinessPickups</h1>
        </BusinessPickupContext.Provider>
      ) : (
        <UserPickupContext.Provider value={{type, id, pickups}}>
        <UserPickups {...props}/>
        <h1>VolunteerPickups</h1>
        </UserPickupContext.Provider>
      )}
    </div>
  );
};

export default Dashboard;
