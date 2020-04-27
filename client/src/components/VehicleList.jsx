import React from 'react';
import VehicleListItem from './VehicleListItem.jsx';

const VehicleList = (props) => {
    var hideVehicle = props.onHideVehicle;
    const VehicleListComponents = props.vehicles.map((element) => {
        return (
            <VehicleListItem
            key={element.id}
            vId={element.vId}
            year={element.year}
            make={element.make}
            model={element.model}
            vin={element.vin}
            color={element.color}
            miles={element.miles}
            onHideVehicle={hideVehicle}
            />
        )
    })

    return (
        <tbody>
            {VehicleListComponents}
        </tbody>
    )
}

export default VehicleList;