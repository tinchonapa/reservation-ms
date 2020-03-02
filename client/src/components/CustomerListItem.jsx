import React from 'react';

const CustomerListItem = (props) => {
    return (
        <ul className="customers">
            <li>
                {props.fName} {props.lName} {props.dob} {props.dlN} {props.dlCountry} {props.dlState} {props.dlExp}
            </li>
        </ul>
    )
}

export default CustomerListItem;