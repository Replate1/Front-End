import React, { useState, useParams } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//components
import Header from "./components/Header";
import BusinessPickups from "../components/BusinessPickups";
import UserPickups from "../components/UserPickups";
import Pickups from "../components/Pickup";

//contexts
import BusinessPickupContext from "../contexts/BusinessPickup";
import UserPickupContext from "../contexts/UserPickup";

initialState = {
  user_type: "",
  userId: "",
  pickups: []
};

const Dashboard = props => {

  const [loggedInUser, setLoggedInUser] = useState(initialState);
  const [pickups, setPickups] = useState([]);
  const { id } = useParams();

  const getUserInfo = () => {
    return localStorage.getItem("type", "userId");
  };

  const setUser = user => {
    setLoggedInUser(
      getUserInfo(),
      [...loggedInUser, user]
    );
  };

  const getPickups = pickup => {
    setPickups;
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {/* {user_type === '1' ? && (
        <BusinessPickups props={loggedInUser} />
      ) : (
        <UserPickups props={loggedInUser} />
      ) */}
    </div>
  );
};

export default Dashboard;
