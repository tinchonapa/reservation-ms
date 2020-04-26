import React from 'react';
import CustomerListItem from './CustomerListItem.jsx';

const CustomerList = (props) => {
    console.log('At customerList ', props.customers)
    var deleteCustomer = props.onDeleteCustomer;
    var editCustomer = props.onClickEditCustomer;
    // var headers = Object.keys(props.customers[0]);
    // headers.splice(headers.length-1, 'Delete', 'Edit');
    const CustomerListComponents = props.customers.map((element) => {
        return (
            <CustomerListItem
            key={element.id}
            id={element.id}
            fName={element.fName}
            lName={element.lName}
            dob={element.dob}
            dlN={element.dlN}
            dlExp={element.dlExp}
            dlCountry={element.dlCountry}
            dlState={element.dlState}
            onClickEditCustomer={editCustomer}
            onDeleteCustomer={deleteCustomer}
            />
        )
    })

    return (
        <tbody>
            {CustomerListComponents}
        </tbody>
    )
}

export default CustomerList;