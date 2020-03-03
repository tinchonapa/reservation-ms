import React from 'react';
import CustomerForm from './CustomerForm.jsx';
import CustomerList from './CustomerList.jsx';
import VehicleForm from './VehicleForm.jsx';
import VehicleList from './VehicleList.jsx';
// import ReservationForm from './ReservatoinForm.jsx';
// import ReservationList from './ReservationList.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            customers: [],
            vehicles: [],
            editCustBtn: false,
            editVehBtn: false
        }

        this.getCustomers = this.getCustomers.bind(this);
        this.addNewCustomer = this.addNewCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.getVehicles = this.getVehicles.bind(this);
        this.addNewVehicle = this.addNewVehicle.bind(this);
    }

    componentDidMount() {
        this.getCustomers()
        this.getVehicles()
    }

    // CUSTOMERS functions
    getCustomers() {
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
    onClickEditCust(){
        this.setState(state => ({
            editCustBtn: !state.editCustBtn
        }));
    }
    editCustomer(dlN, customerData) {
        fetch(`/api/customers/${dlN}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData)
        })
        .then(data => {
            console.log('Success ', data);
        })
        .catch(error => {
            console.error('Error: ', error);
        })
        this.getCustomers();
    }
    
    deleteCustomer(dlN) {     
        fetch(`/api/customers/${dlN}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(data => {
            console.log('Success ', data);
        })
        .catch(error => {
            console.error('Error: ', error);
        })
        this.getCustomers();
    }

    // VEHICLES functions
    getVehicles() {
        fetch('/api/vehicles')
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
                vehicles: data
            })
        })
    }

    addNewVehicle(newVehicleData) {
        const id = this.state.vehicles.length + 1;
        newVehicleData.id = id;
        const newVehicle = this.state.vehicles.concat(newVehicleData);
        this.setState({
            vehicles: newVehicle
        })
    }

    render() {
        return (
         <div>
             <h1>Reservation Form</h1>
             <div className="navbar">
                 <button>New Customer</button>
                 <button>New Vehicle</button>
                 <button>New Reservation</button>
             </div>
             <div className="customer-info">
                <h3>Customer Info</h3>
                <CustomerForm addNewCustomer={this.addNewCustomer} />
                <CustomerList onDeleteCustomer={this.deleteCustomer} customers={this.state.customers} />
             </div>
             <div className="vehicle-info">
                 <h3>Vehicle Info</h3>
                 <VehicleForm addNewVehicle={this.addNewVehicle} />
                 <VehicleList vehicles={this.state.vehicles} />
             </div>
             <div className="reservation-info">
                 <h3>Reservation Info</h3>
             </div>
         </div>
        )
    }
}

export default App;