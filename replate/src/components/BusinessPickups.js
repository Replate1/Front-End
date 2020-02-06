import React, { useContext } from 'react';
import Pickup from './Pickup';
import BusinessPickupContext from '../contexts/BusinessPickup';
import AddPickup from "./AddPickup";



const BusinessPickups = props => {

    const addPickupHandler = () => {
        props.history.push('/add-pickup')
    }

    const changePickupHandler = () => {
        props.history.push('/change-pickup')
    }
    
    const { pickups, id } = useContext(BusinessPickupContext)
    // console.log("This is from BusinessPickups " , props)
    return (
        <div className="business-pickups">
            <button onClick={addPickupHandler}>Add Pickup</button>
            {/* <AddPickup props={id} /> */}
            {pickups.map(pickup => (
                <Pickup
                    key={pickup.id}
                    pickup={pickup}
                    
                />
            ))}
            <button onClick={changePickupHandler}>Change Pickup</button>
        </div>
    );
}

export default BusinessPickups;