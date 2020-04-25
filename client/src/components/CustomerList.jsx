import React from 'react';
import CustomerListItem from './CustomerListItem.jsx';

const CustomerList = (props) => {
    console.log('At customerList ', props.customers)
    var deleteCustomer = props.onDeleteCustomer;
    var editCustomer = props.onClickEditCustomer;
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
            onClickEditCustomer={editCustomer}
            />
        )
    })

    return (
            <div className="list-group customers">
                {CustomerListComponents}
            </div>
    )
}

export default CustomerList;