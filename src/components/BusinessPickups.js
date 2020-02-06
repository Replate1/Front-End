import React, { useContext } from 'react';
import Pickup from './Pickup';
import BusinessPickupContext from '../contexts/BusinessPickup';
import AddPickup from "./AddPickup";



const BusinessPickups = props => {

    const addPickupHandler = () => {
        props.history.push('/add-pickup')
    }
    
    const { pickups, id } = useContext(BusinessPickupContext)

    return (
        <div className="business-pickups">
            <button onClick={addPickupHandler}>Add Pickup</button>
            {Array.from(pickups).map(pickup => (
                <Pickup
                    key={pickup.id}
                    pickup={pickup}
                    updatePickup={props.updatePickup}
                />
            ))}
        </div>
    );
}

export default BusinessPickups;