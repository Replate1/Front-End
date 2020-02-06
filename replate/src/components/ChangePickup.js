import React, { useState, useContext } from "react";
import BusinessPickupContext from "../contexts/BusinessPickup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ChangePickup = props => {

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
    .then(res => console.log(res))
    .catch(err => console.log(err))
    props.history.push('/dashboard')
  };

  const handleChange = e => {
    //   e.persist();
    setPickup({
        ...pickup,
        [e.target.name]: e.target.value
      });
}

  return (
    <div>
      AddPickup
      <form className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="food_type">
            Food Type
          </label>
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
          <label className="FormField__Label" htmlFor="amount">
            Amount
          </label>
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
          <label className="FormField__Label" htmlFor="pickup_time">
            Pickup Time
          </label>
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
        <button onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  );
};

export default ChangePickup;
