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
  const type= localStorage.getItem("type");
  const id = localStorage.getItem("userId"); 
  // console.log(typeof(id)); 
  const [pickups, setPickups] = useState([]);
  console.log("Dashboard.js Pickups: " , typeof(pickups));
  console.log(pickups);

  const updatePickup = updatedPickup => {
    setPickups({
      ...pickups.map(pickup => {
        if(pickups.id === updatedPickup.id) {
          // console.log("UpdatedPickup: ", updatedPickup)
          return updatedPickup
        } else {
          // console.log("pickup: ", pickup)
          return pickup;
        }
      })
    })
  }

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
        .get(`/api/pickups/open-requests`)
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
        <BusinessPickups {...props} updatePickup={updatePickup}/>
        </BusinessPickupContext.Provider>
      ) : (
        <UserPickupContext.Provider value={{type, id, pickups}}>
        <UserPickups {...props}/>
        </UserPickupContext.Provider>
      )}
    </div>
  );
};

export default Dashboard;