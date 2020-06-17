import React from 'react';
import Button from './Button.jsx';

const CustomerListItem = (props) => {
    var customer = {
        id: props.id,
        first_name: props.first_name,
        last_name: props.last_name,
        dob: props.dob,
        dl_number: props.dl_number,
        dl_country: props.dl_country,
        dl_state: props.dl_state,
        dl_exp: props.dl_exp
    };

    // console.log('edit ', customer)
    return (
        <tr>
            <td>+</td>
            <td>{props.first_name}</td>
            <td>{props.last_name}</td>
            <td>{props.dob}</td>
            <td>{props.dl_number}</td>
            <td>{props.dl_exp}</td>
            <td>{props.dl_country}</td>
            <td>{props.dl_state}</td>
            <td><button type="button" className="btn btn-warning" onClick={() => {props.onClickEditCustomer(true, customer)}}>Edit</button>{/* <button onClick={() => {props.onEditCustomer(props.dl_number)}}>Edit</button> */}</td>
            <td><button type="button" className="btn btn-danger" onClick={() => {props.onHideCustomer(props.dl_number, props.show)}}>Delete</button></td>
        </tr>
    )
}
export default CustomerListItem;