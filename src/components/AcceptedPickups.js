import React, { useState, useEffect, useContext } from 'react';
import UserPickupContext from '../contexts/UserPickup';
import Pickup from './Pickup';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AcceptedPickups = props => {

    const volId = localStorage.getItem('userId');
    const volString = volId.toString();
    const [acceptedPickups, setAcceptedPickups] = useState({});

    const { pickups, id } = useContext(UserPickupContext);

    useEffect(() => {
        axiosWithAuth()
        .get(`/api/pickups/volunteer/${volString}`)
        .then(res => {
            // console.log(res)
            setAcceptedPickups(res.data)
            // console.log(typeof(acceptedPickups));
        })
        .catch(err => console.log(err))
    }, [])

    // console.log("Pickups from AcceptedPickups.js: " , acceptedPickups)

    return( 
        <div className="accepted-pickups">
            {Array.from(acceptedPickups).map(pickup => (
                <Pickup
                    key={pickup.id}
                    pickup={pickup}
                />
            ))}
        </div>
    )
}

export default AcceptedPickups;