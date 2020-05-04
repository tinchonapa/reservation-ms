import React from 'react';
import ReservationListItem from './ReservationListItem.jsx';

const ReservationList = (props) => {
    console.log('Reservation props ', props.reservations)
    var editReservation = props.onClickEditReservation;
    var hideReservation = props.onHideReservation;
    const ReservationListComponents = props.reservations.map((element) => {
        return(
            <ReservationListItem
                key={element.reservation_id}
                id={element.reservation_id}
                customer1_id={element.c1_id}
                c1_first={element.c1_first}
                c1_lastname={element.c1_lastname}
                customer2_id={element.c2_id}
                c2_first={element.c2_first}
                c2_lastname={element.c2_lastname}
                vehicle_id={element.vehicle_id}
                date_in={element.date_in}
                date_out={element.date_out}
                price={element.price}
                onClickEditReservation={editReservation}
                onHideReservation={hideReservation}
            />
        )
    })

    return(
        <tbody>
            {ReservationListComponents}
        </tbody>
    )
}

export default ReservationList;