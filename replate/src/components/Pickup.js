import React, { useContext } from 'react';

export const Pickup = props => {
    return (
        <div className="pickup">
            <h4 className="pickup-name">{props.pickup.name}</h4>
            <p className="pickup-location">{props.pickup.location}</p>
    <p className="pickup-business">{props.pickup.business}</p>
        </div>
    );
}