import React from 'react';
import Button from './Button.jsx';

const CustomerListItem = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.first_name}</td>
            <td>{props.last_name}</td>
            <td>{props.dob}</td>
            <td>{props.dl_number}</td>
            <td>{props.dl_exp}</td>
            <td>{props.dl_country}</td>
            <td>{props.dl_state}</td>
            <td><button type="button" className="btn btn-warning" onClick={() => {props.onEditCustomer()}}>Edit</button>{/* <button onClick={() => {props.onEditCustomer(props.dl_number)}}>Edit</button> */}</td>
            <td><button type="button" className="btn btn-danger" onClick={() => {props.onHideCustomer(props.dl_number, props.show)}}>Delete</button></td>
        </tr>
    )
}
export default CustomerListItem;