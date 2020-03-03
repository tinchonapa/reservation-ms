import React from 'react';
import CustomerListItem from './CustomerListItem.jsx';

const CustomerList = (props) => {
    var deleteCustomer = props.onDeleteCustomer;
    const CustomerListComponents = props.customers.map((element) => {
        return (
            <CustomerListItem
            key={element.id}
            fName={element.fName}
            lName={element.lName}
            dob={element.dob}
            dlN={element.dlN}
            dlCountry={element.dlCountry}
            dlState={element.dlState}
            dlExp={element.dlExp}
            onDeleteCustomer={deleteCustomer}
            />
        )
    })

    return (
        <ul className="customers">
            {CustomerListComponents}
        </ul>
    )
}

export default CustomerList;