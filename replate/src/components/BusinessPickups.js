import React, { useContext } from 'react';
import Pickup from './Pickup';
import BusinessPickupContext from '../contexts/BusinessPickup';

const BusinessPickups = () => {
    const { pickups, addPickups, editPickups } = useContext(BusinessPickupContext)

    return (
        <div className="business-pickups">
            {pickups.map(pickup => {
                <Pickup
                    key={pickup.id}
                    pickup={pickup}
                    editPickups= {editPickups}
                    addPickups= {addPickups}
                />
            })}
        </div>
    );
}

export default BusinessPickups;