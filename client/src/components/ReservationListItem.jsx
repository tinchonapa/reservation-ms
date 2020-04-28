import React from 'react';

const ReservationListItem = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.customer1_id}</td>
            <td>{props.c1_first}</td>
            <td>{props.c1_lastname}</td>
            <td>{props.customer2_id}</td>
            <td>{props.c2_first}</td>
            <td>{props.c2_lastname}</td>
            <td>{props.vehicle_id} </td>
            <td>{props.date_in}</td>
            <td>{props.date_out}</td>
            <td>{props.price}</td>
            <td><button type="button" className="btn btn-warning" onClick={() => {props.onEditReservation()}}>Edit</button></td>
            <td><button type="button" className="btn btn-danger" onClick={() => {props.onHideReservation(props.id, props.show)}}>Delete</button></td>
        </tr>
    )
}

export default ReservationListItem;