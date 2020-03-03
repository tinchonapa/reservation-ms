import React from 'react';
import VehicleListItem from './VehicleListItem.jsx';

const VehicleList = (props) => {
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
            />
        )
    })

    return (
        <div className="list-group vehicles">
            {VehicleListComponents}
        </div>
    )
}

export default VehicleList;