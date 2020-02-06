import React, { useContext, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const Pickup = props => {

  const {
    id,
    food_type,
    amount,
    pickup_time,
    completed,
    business_id,
    volunteer_id
  } = props.pickup;
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(
    id,
    food_type,
    amount,
    pickup_time,
    completed,
    business_id,
    volunteer_id
  );
  const user = localStorage.getItem("type");
  const userNum = parseInt(user);
  const idString = JSON.stringify(id);
  const volId = localStorage.getItem("userId")
  const volIdInt = parseInt(volId);
  console.log(typeof(volIdInt));
  console.log(volIdInt);

  const editPickupHandler = () => {
    setEditing(!editing);
  };

  const handleUpdate = e => {
    e.preventDefault();
    props.updatePickup(input);
    setEditing(false);
    axiosWithAuth()
      .put(`/api/pickups/${idString}`, input)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    window.location.reload();
  };

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const deletePickupHandler = props => {
    axiosWithAuth()
      .delete(`/api/pickups/${idString}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const acceptPickupHandler = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`/api/pickups/${id}`, volIdInt)
    .then(res => {
      console.log(res)
      window.location.reload();
    })
    .catch(err => console.log(err))
  }

  const completePickupHandler = props => {
    axiosWithAuth()
      .delete(`/api/pickups/${idString}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return editing ? (
    <form className="FormFields">
      <div className="FormField">
        <input
          type="text"
          id="food_type"
          className="FormField__Input"
          placeholder={food_type}
          name="food_type"
          value={input.food_type}
          onChange={handleChange}
        />
      </div>
      <div className="FormField">
        <input
          type="number"
          id="amount"
          className="FormField__Input"
          placeholder={amount}
          name="amount"
          value={input.amount}
          onChange={handleChange}
        />
      </div>
      <div className="FormField">
        <input
          type="number"
          id="pickup_time"
          className="FormField__Input"
          placeholder={pickup_time}
          name="pickup_time"
          value={input.pickup_time}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleUpdate}>Submit</button>
    </form>
  ) : (
    <div className="pickup">
      <h4 className="pickup-food">Food Type: {props.pickup.food_type}</h4>
      <p className="pickup-amount">Amount: {props.pickup.amount}</p>
      <p className="pickup-time">Pickup Time: {props.pickup.pickup_time}</p>
      {userNum === 1 ? (
        <button onClick={editPickupHandler}>Edit Pickup</button>
      ) : (
        <button onClick={acceptPickupHandler}>Accept Pickup</button>
      )}
      {userNum === 1 ? (
        <button onClick={deletePickupHandler}>Delete Pickup</button>
      ) : null}
      {userNum === 2 && volunteer_id ? <button>Unaccept Pickup</button> : null}
      {userNum === 2 && volunteer_id ? <button onClick={completePickupHandler}>Complete Pickup</button> : null}
    </div>
  );
};

export default Pickup;
