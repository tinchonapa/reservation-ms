import React from 'react';
import Button from './Button.jsx';

const CustomerListItem = (props) => {
    // const del = {
    //     id: 1,
    //     label: 'Delete'
    // };
    // const edit = 'Edit';
    return (
        <ul className="customers">
            <li>
                {props.fName} {props.lName} {props.dob} {props.dlN} {props.dlCountry} {props.dlState} {props.dlExp}
                
            </li>
            <button onClick={() => {props.onDeleteCustomer(props.dlN)}}>Delete</button>
            {/* <button onClick={() => {props.onEditCustomer(props.dlN)}}>Edit</button> */}
        </ul>
    )
}
// <Button key={del.key}label={del.label}/>
export default CustomerListItem;