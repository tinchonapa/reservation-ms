import React from 'react';
import Form from './Form.jsx';
import CustomerList from './CustomerList.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            customers: []
        }
        this.addNewCustomer = this.addNewCustomer.bind(this)
    }

    componentDidMount() {
        fetch('/api/customers')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log('this is data ', data);
                this.setState({
                    customers: data
                })
            })
    }

    addNewCustomer(newCustomerData) {
        const id = this.state.customers.length + 1;
        newCustomerData.id = id;
        const newCustomer = this.state.customers.concat(newCustomerData);
        this.setState({
            customers: newCustomer
        })
    }


    render() {
        return (
         <div>
             <h1>Reservation Form</h1>
             <div className="customer-info">
                <h3>Customer Info</h3>
                <Form addNewCustomer={this.addNewCustomer}/>
                <CustomerList customers={this.state.customers} />
             </div>
             <div className="vehicle-info">
                 <h3>Vehicle Info</h3>
             </div>
             <div className="reservation-info">
                 <h3>Reservation Info</h3>
             </div>
         </div>
        )
    }
}

export default App;