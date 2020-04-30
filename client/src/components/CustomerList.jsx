import React from 'react';
import CustomerListItem from './CustomerListItem.jsx';

const CustomerList = (props) => {
    console.log('At customerList ', props.customers)
    var hideCustomer = props.onHideCustomer;
    var editCustomer = props.onClickEditCustomer;
    // console.log('edit  ', editCustomer);
    // console.log('hide  ', hideCustomer);
    // var headers = Object.keys(props.customers[0]);
    // headers.splice(headers.length-1, 'Delete', 'Edit');
    const CustomerListComponents = props.customers.map((element) => {
        return (
            <CustomerListItem
            key={element.id}
            id={element.id}
            first_name={element.first_name}
            last_name={element.last_name}
            dob={element.dob}
            dl_number={element.dl_number}
            dl_exp={element.dl_exp}
            dl_country={element.dl_country}
            dl_state={element.dl_state}
            onClickEditCustomer={editCustomer}
            onHideCustomer={hideCustomer}
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