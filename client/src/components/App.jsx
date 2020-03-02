import React from 'react';
import Form from './Form.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            customers: []
        }
        this.addNewCustomer = this.addNewCustomer.bind(this)
    }

    componentDidMount() {
        fetch('http:/localhost:3002/api/customers')
            .then((res) => {
                console.log('Initial res is ', res)
                return res.json()
            })
            .then((data) => {
                console.log('this is data ', data);
                this.setState({
                    customers: data.customers
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
             <h1>Hello</h1>
             <Form addNewCustomer={this.addNewCustomer}/>
         </div>
        )
    }
}

export default App;