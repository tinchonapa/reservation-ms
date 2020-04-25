import React from 'react';
import CustomerForm from './CustomerForm.jsx';
import CustomerList from './CustomerList.jsx';
import VehicleForm from './VehicleForm.jsx';
import VehicleList from './VehicleList.jsx';
import ReservationForm from './ReservationForm.jsx';
import ReservationList from './ReservationList.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            customers: [],
            vehicles: [],
            reservations: [],
            editCustBtn: false,
            editVehBtn: false
        }

        this.getCustomers = this.getCustomers.bind(this);
        this.addNewCustomer = this.addNewCustomer.bind(this);
        this.onClickEditCust = this.onClickEditCust.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.getVehicles = this.getVehicles.bind(this);
        this.addNewVehicle = this.addNewVehicle.bind(this);
        this.getReservations = this.getReservations.bind(this);
        this.addNewReservation = this.addNewReservation.bind(this);
    }

    componentDidMount() {
        this.getCustomers()
        this.getVehicles()
        this.getReservations()
    }

    // ------- CUSTOMERS Fn ------- //
    // // add fn to component form for state to be in sync
    addNewCustomer(newCustomerData) {
        const id = this.state.customers.length + 1; // id for front-side does not correlate to db
        newCustomerData.id = id;
        const newCustomer = this.state.customers.concat(newCustomerData);
        this.setState({
            customers: newCustomer
        })
    }

    getCustomers() {
        fetch('/api/customers')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            // set to state the retrieved data
            this.setState({
                customers: data
            })
        })
    }

    onClickEditCust(){
        this.setState(state => ({
            editCustBtn: !state.editCustBtn
        }));
        console.log('Executed?')
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
    
    // hides customer, doesn't delete
    deleteCustomer(dlN) {
        fetch(`/api/customers/${dlN}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                show: false
            })
        })
        .then(data => {
            console.log('Success ', data);
            this.getCustomers();
        })
        .catch(error => {
            console.error('Error: ', error);
        })

    }

    // ------- VEHICLES Fn ------- //
    // add fn to component form for state to be in sync
    addNewVehicle(newVehicleData) {
        const id = this.state.vehicles.length + 1;
        newVehicleData.id = id;
        const newVehicle = this.state.vehicles.concat(newVehicleData);
        this.setState({
            vehicles: newVehicle
        })
    }

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


    // ------- RESERVATIONS Fn ------- //
    getReservations() {
        fetch('/api/reservations')
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
                reservations: data
            })
        })
    }

    addNewReservation(newReservationData) {
        const id = this.state.reservations.length + 1;
        newReservationData.id = id;
        const newReservation = this.state.reservations.concat(newReservationData);
        console.log('this is at exec');
        this.setState({
            reservations: newReservation
        })
        console.log('after state exec');
    }


    //  ------- Render ------- //
    render() {
        return (
         <div className="container">
             <div className="jumbotron header">
                <h1>Reservation Form</h1>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary">New Customer</button>
                    <button type="button" className="btn btn-primary">New Vehicle</button>
                    <button type="button" className="btn btn-primary">New Reservation</button>
                </div>
             </div>
             <div className="container customer-info">
                <h3>Customer Info</h3>
                <CustomerForm addNewCustomer={this.addNewCustomer} />
                <CustomerList onDeleteCustomer={this.deleteCustomer} onClickEditCustomer={this.onClickEditCust} customers={this.state.customers} />
             </div>
             <div className="container vehicle-info">
                 <h3>Vehicle Info</h3>
                 <VehicleForm addNewVehicle={this.addNewVehicle} />
                 <VehicleList vehicles={this.state.vehicles} />
             </div>
             <div className="container reservation-info">
                 <h3>Reservation Info</h3>
                 <ReservationForm addNewReservation={this.addNewReservation} />
                 <ReservationList reservations={this.state.reservations} />
             </div>
         </div>
        )
    }
}

export default App;