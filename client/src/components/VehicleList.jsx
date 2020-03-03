import React from 'react';
import VehicleListItem from './VehicleListItem.jsx';

const VehicleList = (props) => {
    const VehicleListComponents = props.vehicles.map((element) => {
        return (
            <VehicleListItem
            key={element.ed}
            vId={element.vId}
            year={element.year}
            make={element.make}
            model={element.model}
            vin={element.vin}
            color={element.color}
            miles={element.miles}
            />
        )
    })

    return (
        <ul className="vehicles">
            {VehicleListComponents}
        </ul>
    )
}

export default VehicleList;