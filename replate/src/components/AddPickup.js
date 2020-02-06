import React, { useState, useContext } from 'react';
import BusinessPickupContext from "../contexts/BusinessPickup";


const AddPickup = props => {

    const { id } = useContext(BusinessPickupContext)

    const handleSubmit = e => {
        e.preventDefault();
        setPickup({
            ...pickup,
            food_type: food_type,
            amount: amount,
            pickup_time: pickup_time,
            complete: false,
            business_id: id
        })
    }

    const [pickup, setPickup] = useState();

    return(
        <div>
            AddPickup

        </div>
    )
}

export default AddPickup;