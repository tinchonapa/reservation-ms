import React from 'react';
import Button from './Button.jsx';

const CustomerListItem = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.fName}</td>
            <td>{props.lName}</td>
            <td>{props.dob}</td>
            <td>{props.dlN}</td>
            <td>{props.dlExp}</td>
            <td>{props.dlCountry}</td>
            <td>{props.dlState}</td>
            <td><button type="button" className="btn btn-warning" onClick={() => {props.onEditCustomer()}}>Edit</button>{/* <button onClick={() => {props.onEditCustomer(props.dlN)}}>Edit</button> */}</td>
            <td><button type="button" className="btn btn-danger" onClick={() => {props.onDeleteCustomer(props.dlN, props.show)}}>Delete</button></td>
        </tr>
    )
}
export default CustomerListItem;