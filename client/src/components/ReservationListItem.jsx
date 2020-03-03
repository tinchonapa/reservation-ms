import React from 'react';

const ReservationListItem = (props) => {
    return (
        <li>
            {props.id} {props.customer1_id} {props.customer2_id} {props.vehicle_id} 
            {props.date_in} {props.date_out} {props.price}
        </li>
    )
}

export default ReservationListItem;