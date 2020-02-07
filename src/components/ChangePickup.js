import React, { useState, useContext, useEffect } from "react";
import BusinessPickupContext from "../contexts/BusinessPickup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ChangePickup = props => {

  const id = localStorage.getItem('userId');
  const idNum = parseInt(id);
 
  
  const [pickupId, setPickupId] = useState();

  const [pickup, setPickup] = useState({
    id: "",
    food_type: "",
    amount: "",
    pickup_time: "",
    complete: false,
    business_id: idNum
  });

  useEffect(()=> {
      axiosWithAuth()
      .get(`/api/pickups/business/${idNum}`)
      .then(res => {
          console.log(res)
        //   setPickup(res.data)
        //   console.log(pickup)
          setPickupId(res.data.id)
          console.log("Pickup ID ", pickupId);
        })
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`/api/pickups/${pickupId}`, pickup)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    props.history.push('/dashboard')
  };

  const handleChange = e => {
    setPickup({
        ...pickup,
        [e.target.name]: e.target.value
      });
}

  return (
    <div>
      Edit Pickup
      <form className="FormFields">
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
        <button className="btn"> onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  );
};

export default ChangePickup;
