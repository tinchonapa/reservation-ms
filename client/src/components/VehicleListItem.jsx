import React from 'react';

const VehicleListItem = (props) => {
    var vehicle = {
        id: props.id,
        vId:props.vId,
        year: props.year,
        make: props.make,
        model: props.model,
        vin: props.vin,
        color: props.color,
        miles: props.miles
    }
    return (
        <tr>
            <td>{props.vId}</td>
            <td>{props.year}</td>
            <td>{props.make}</td>
            <td>{props.model}</td>
            <td>{props.vin}</td>
            <td>{props.color}</td>
            <td>{props.miles}</td>
            <td><button type="button" className="btn btn-warning" onClick={() => {props.onClickEditVehicle(true, vehicle)}}>Edit</button></td>
            <td><button type="button" className="btn btn-danger" onClick={() => {props.onHideVehicle(props.vId, props.show)}}>Delete</button></td>
        </tr>
    )
}

export default VehicleListItem;