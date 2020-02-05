import React, { useContext } from 'react';
import Pickup from './Pickup';
import UserPickupContext from '../contexts/UserPickup';

const UserPickups = () => {
    const { pickups, addPickup, completePickup } = useContext(BusinessPickupContext)

    return (
        <div className="user-pickups">
            {pickups.map(pickup => {
                <Pickup
                    key={pickup.id}
                    pickup={pickup}
                    addPickup= {addPickup}
                    completePickup= {completePickup}
                />
            })}
        </div>
    );
}

export default UserPickups;