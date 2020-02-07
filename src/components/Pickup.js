import React, { useState, useEffect } from "react";
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
  // console.log(typeof id);
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
  const [currentPickup, setCurrentPickup] = useState({});
  const [unacceptedPickup, setUnacceptedPickup] = useState({});
  const user = localStorage.getItem("type");
  const userNum = parseInt(user);
  const idString = JSON.stringify(id);
  const volId = localStorage.getItem("userId");
  const volIdInt = parseInt(volId);
  // console.log(typeof idString);
  // console.log(typeof ("volIdInt : ", volIdInt));
  // console.log("Input from Pickup.js: ", input);
  // console.log("Pickup from Pickup.js: " , pickup)

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/pickups/${idString}`)
      .then(res => {
        console.log(res);
        const {
          id,
          food_type,
          amount,
          pickup_time,
          complete,
          business_id
        } = res.data;
        setCurrentPickup({
          id,
          food_type,
          amount,
          pickup_time,
          completed,
          business_id,
          volunteer_id: volIdInt
        });
        setUnacceptedPickup({
          id,
          food_type,
          amount,
          pickup_time,
          completed,
          business_id,
          volunteer_id: null
        });
      })
      .catch(err => console.log(err));
  }, [setCurrentPickup]);

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
      .put(`/api/pickups/${idString}`, currentPickup)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const unacceptPickupHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/pickups/${idString}`, unacceptedPickup)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

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
      <button className="button" onClick={handleUpdate}>
        Submit
      </button>
    </form>
  ) : (
    <div className="pickup">
      <h4 className="pickup-food">Food Type: {props.pickup.food_type}</h4>
      <p className="pickup-amount">Amount: {props.pickup.amount}</p>
      <p className="pickup-time">Pickup Time: {props.pickup.pickup_time}</p>
      {userNum === 1 ? (
        <button className="button" onClick={editPickupHandler}>
          Edit Pickup
        </button>
      ) : userNum === 2 && volunteer_id === volIdInt ? (
        <div>
          <button className="button" onClick={unacceptPickupHandler}>
            {" "}
            Unaccept Pickup
          </button>{" "}
          <button className="button" onClick={completePickupHandler}>
            Complete Pickup
          </button>
        </div>
      ) : (
        <button className="button" onClick={acceptPickupHandler}>
          Accept Pickup
        </button>
      )}
      {userNum === 1 ? (
        <button className="button" onClick={deletePickupHandler}>
          Delete Pickup
        </button>
      ) : null}
    </div>
  );
};

export default Pickup;
