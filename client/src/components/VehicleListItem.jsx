import React from 'react';

const VehicleListItem = (props) => {
    return (
        <ul className="vehicles">
            <li>
                {props.vId} {props.year} {props.make} {props.model} {props.vin} {props.color} {props.miles}
            </li>
        </ul>
    )
}

export default VehicleListItem;