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
            editCustomer: {},
            vehicles: [],
            reservations: [],
            editCustBtn: false,
            editVehBtn: false
        }

        this.addNewCustomer = this.addNewCustomer.bind(this);
        this.getCustomers = this.getCustomers.bind(this);
        this.onClickEditCust = this.onClickEditCust.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.hideCustomer = this.hideCustomer.bind(this);
        this.addNewVehicle = this.addNewVehicle.bind(this);
        this.getVehicles = this.getVehicles.bind(this);
        this.hideVehicle = this.hideVehicle.bind(this);
        this.addNewReservation = this.addNewReservation.bind(this);
        this.getReservations = this.getReservations.bind(this);
        this.hideReservation = this.hideReservation.bind(this);
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

    onClickEditCust(data, customer){
        this.setState({
            editCustBtn: data,
            editCustomer: customer
        });
        console.log('Executed?', customer)
    }

    editCustomer(customerData) {
        var result = []; // variable to store customers state and then modify it, before staging changes
        console.log('@ editCusotmer state.customers ', this.state.customers);
        console.log('@ editCusotmer customerData ', customerData);
        const index = this.state.customers.map((el) => { return el.id }).indexOf(customerData.id);
        result = result.concat(this.state.customers);
        result.splice(index,1,customerData);
        this.setState({
            customers: result, 
            editCustBtn: false
        });
        console.log('Current customers ', this.state.customers);
    }
    

    /*
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
    }*/
    
    // hides customer, doesn't delete
    hideCustomer(dlN) {
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

    // hides vehicle, doesn't delete
    hideVehicle(vId) {
        fetch(`/api/vehicles/${vId}`, {
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
            this.getVehicles();
        })
        .catch(error => {
            console.error('Error: ', error);
        })

    }


    // ------- RESERVATIONS Fn ------- //
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

    // hides reservation, doesn't delete
    hideReservation(id) {
        fetch(`/api/reservations/${id}`, {
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
            this.getReservations();
        })
        .catch(error => {
            console.error('Error: ', error);
        })

    }



    //  ------- Render ------- //
    render() {
        let customerForm;
        if ( this.state.editCustBtn ) {
            console.log('Currently edit = ', this.state.editCustBtn);
            customerForm = <CustomerForm 
                            addNewCustomer={this.addNewCustomer}
                            editCustomer={this.editCustomer} 
                            customer={this.state.editCustomer} 
                            edit={this.state.editCustBtn} 
                        /> ;
        } else {
            console.log('Currently edit = ', this.state.editCustBtn);
            customerForm = <CustomerForm 
                            addNewCustomer={this.addNewCustomer}
                            editCustomer={this.editCustomer} 
                            customer={this.state.editCustomer} 
                            edit={this.state.editCustBtn} 
                            /> ;
        }
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
             {/* --- CUSTOMER --- */}
             <div className="container customer-info">
                <h3>Customer Info</h3>
                { customerForm }
                {/* <CustomerForm editCustomer={this.editCustomer} 
                            customer={this.state.editCustomer} 
                            edit={this.state.editCustBtn} 
                        /> */}
                {/* <CustomerForm addNewCustomer={this.addNewCustomer} editCustomer={this.editCustomer} customer={this.state.editCustomer} edit={this.state.editCustBtn} /> */}
                <table id="customer">
                    <thead>
                        <tr>
                            <th>ID</th><th>First Name</th><th>Last Name</th><th>DOB</th>
                            <th>Driver's License #</th><th>Driver's License Exp</th>
                            <th>Counthy</th><th>State</th><th>Edit</th><th>Delete</th>
                        </tr>
                    </thead>
                    <CustomerList onHideCustomer={this.hideCustomer} onClickEditCustomer={this.onClickEditCust} customers={this.state.customers} />
                </table>
             </div>
             {/* --- VEHICLE --- */}
             <div className="container vehicle-info">
                 <h3>Vehicle Info</h3>
                 <VehicleForm addNewVehicle={this.addNewVehicle} />
                 <table id="vehicle">
                     <thead>
                        <tr>
                            <th>V_ID</th><th>Year</th><th>Make</th><th>Model</th>
                            <th>VIN Number</th><th>Color</th><th>Miles</th>
                            <th>Edit</th><th>Delete</th>
                        </tr>
                     </thead>
                 <VehicleList onHideVehicle={this.hideVehicle} vehicles={this.state.vehicles} />
                 </table>
             </div>
             {/* --- RESERVATION --- */}
             <div className="container reservation-info">
                <h3>Reservation Info</h3>
                <ReservationForm addNewReservation={this.addNewReservation} />
                <table id="reservation">
                    <thead>
                        <tr>
                            <th>Rental ID</th><th colSpan="3">Primary Driver</th><th colSpan="3">Secondary Driver</th>
                            <th>Vehicle ID</th><th>Date In</th><th>Date Out</th><th>Price</th><th>Edit</th><th>Delete</th>
                        </tr>
                    </thead>
                    <ReservationList onHideReservation={this.hideReservation} reservations={this.state.reservations} />
                </table>
             </div>
         </div>
        )
    }
}

export default App;