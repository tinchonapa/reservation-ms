import React from 'react';
import Button from './Button.jsx';

const CustomerListItem = (props) => {
    // const del = {
    //     id: 1,
    //     label: 'Delete'
    // };
    // const edit = 'Edit';
    return (
        <tr>
            <td>{props.fName}</td>
            <td>{props.lName}</td>
            <td>{props.dob}</td>
            <td>{props.dlN}</td>
            <td>{props.dlCountry}</td>
            <td>{props.dlState}</td>
            <td>{props.dlExp}</td>
            <td><button type="button" className="btn btn-danger" onClick={() => {props.onDeleteCustomer(props.dlN, props.show)}}>Delete</button></td>
            <td><button type="button" className="btn btn-warning" onClick={() => {props.onEditCustomer()}}>Edit</button>{/* <button onClick={() => {props.onEditCustomer(props.dlN)}}>Edit</button> */}
            </td>
        </tr>
    )
}
// <Button key={del.key}label={del.label}/>
export default CustomerListItem;