import React, { useContext } from 'react';
import Pickup from './Pickup';
import UserPickupContext from '../contexts/UserPickup';



const UserPickups = props => {

    const { pickups, id } = useContext(UserPickupContext)
    // console.log("This is from UserPickups " , props)
    console.log(typeof(pickups));
    console.log(pickups);

    return (
        <div className="volunteer-pickups">
            {pickups.map(pickup => (
                <Pickup
                    key={pickup.id}
                    pickup={pickup}
                />
            ))}
        </div>
    );
}

export default UserPickups;