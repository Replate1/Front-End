import React, { useContext } from "react";

export const Pickup = props => {
  return (
    <div className="pickup">
      <h4 className="pickup-food">{props.pickup.food_type}</h4>
      <p className="pickup-amount">{props.pickup.amount}</p>
      <p className="pickup-time">{props.pickup.pickup_time}</p>
    </div>
  );
};

export default Pickup;
