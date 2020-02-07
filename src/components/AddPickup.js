import React, { useState, useContext } from "react";
import BusinessPickupContext from "../contexts/BusinessPickup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Page from "./Page";
import "../App.css";

const AddPickup = props => {

  const id = localStorage.getItem('userId');
  const idNum = parseInt(id);
  console.log(idNum);

  const [pickup, setPickup] = useState({
    food_type: "",
    amount: "",
    pickup_time: "",
    complete: false,
    business_id: idNum
  });

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/pickups/', pickup)
    .then(res => {
        console.log(res)
        props.history.push('/dashboard')
    })
    .catch(err => console.log(err))
  };

  const handleChange = e => {
    setPickup({
        ...pickup,
        [e.target.name]: e.target.value
      });
}

  return (
    <Page>
    <div>
      <h1 className="business-pickups">Add Pickup</h1>
      <form className="FormFields" onSubmit={handleSubmit}>
        <div className="FormField">
          <input
            type="text"
            id="food_type"
            className="FormField__Input"
            placeholder="Food Type"
            name="food_type"
            value={pickup.food_type}
            onChange={handleChange}
          />
        </div>
        <div className="FormField">
          <input
            type="number"
            id="amount"
            className="FormField__Input"
            placeholder="Amount"
            name="amount"
            value={pickup.amount}
            onChange={handleChange}
          />
        </div>
        <div className="FormField">
          <input
            type="number"
            id="pickup_time"
            className="FormField__Input"
            placeholder="Pickup Time"
            name="pickup_time"
            value={pickup.pickup_time}
            onChange={handleChange}
          />
        </div>
        {/* <div>
            <input type="submit">Submit</input>
        </div> */}
        <button className="btn">Submit</button>
      </form>
    </div>
    </Page>
  );
};

export default AddPickup;
