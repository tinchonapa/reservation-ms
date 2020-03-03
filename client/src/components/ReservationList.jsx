import React from 'react';
import ReservationListItem from './ReservationListItem.jsx';

const ReservationList = (props) => {
    console.log('Reservation props ', props.reservations)
    const ReservationListComponents = props.reservations.map((element) => {
        return(
            <ReservationListItem
                key={element.id}
                customer1_id={element.customer1_id}
                customer2_id={element.customer2_id}
                vehicle_id={element.vehicle_id}
                date_in={element.date_in}
                date_out={element.date_out}
                price={element.price}
            />
        )
    })

    return(
        <div className="list-group reservations">
            {ReservationListComponents}
        </div>
    )
}

export default ReservationList;