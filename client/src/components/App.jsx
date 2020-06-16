import React from 'react';
import CustomerForm from './CustomerForm.jsx';
import CustomerList from './CustomerList.jsx';
import VehicleForm from './VehicleForm.jsx';
import VehicleList from './VehicleList.jsx';
import ReservationForm from './ReservationForm.jsx';
import ReservationList from './ReservationList.jsx';
import Search from './Search.jsx';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            customers: [],
            editCustomer: {},
            vehicles: [],
            editVehicle: {},
            reservations: [],
            editReservation: {},
            editCustBtn: false,
            editVehBtn: false,
            editResBtn: false,
            showCustomerTab: true,
            showVehicleTab: false,
            showReservationTab: false
        }

        this.addNewCustomer = this.addNewCustomer.bind(this);
        this.getCustomers = this.getCustomers.bind(this);
        this.onClickEditCust = this.onClickEditCust.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.hideCustomer = this.hideCustomer.bind(this);
        this.customerNav = this.customerNav.bind(this);
        this.addNewVehicle = this.addNewVehicle.bind(this);
        this.getVehicles = this.getVehicles.bind(this);
        this.onClickEditVeh = this.onClickEditVeh.bind(this);
        this.editVehicle = this.editVehicle.bind(this);
        this.hideVehicle = this.hideVehicle.bind(this);
        this.vehicleNav = this.vehicleNav.bind(this);
        this.addNewReservation = this.addNewReservation.bind(this);
        this.getReservations = this.getReservations.bind(this);
        this.onClickEditRes = this.onClickEditRes.bind(this);
        this.editReservation = this.editReservation.bind(this);
        this.hideReservation = this.hideReservation.bind(this);
        this.reservationNav = this.reservationNav.bind(this);
    }

    componentDidMount() {
        this.getCustomers()
        this.getVehicles()
        this.getReservations()
    }

    // ------- CUSTOMERS Fn ------- //
    // // add fn to component form for state to be in sync
    addNewCustomer(newCustomerData) {
        const id = this.state.customers.length + 1; // id for front-side does not correlate to db it must be newCustomerData
        var length = this.state.customers.length - 1;
        console.log('testing length ', length)
        console.log('testing ', this.state.customers[length].id) + 1;
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
        console.log('Customer edit executed?', customer)
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
        // console.log('Current customers ', this.state.customers);
        // this.getCustomers();
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

    onClickEditVeh(data, vehicle){
        this.setState({
            editVehBtn: data,
            editVehicle: vehicle
        });
        console.log('vehicle edit executed?', vehicle)
    }

    editVehicle(vehicleData) {
        var result = []; // variable to store customers state and then modify it, before staging changes
        console.log('@ editCusotmer state.vehicles ', this.state.vehicles);
        console.log('@ editCusotmer vehicleData ', vehicleData);
        const index = this.state.vehicles.map((el) => { return el.id }).indexOf(vehicleData.id);
        result = result.concat(this.state.vehicles);
        result.splice(index,1,vehicleData);
        this.setState({
            vehicles: result, 
            editVehBtn: false
        });
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


    onClickEditRes(data, reservation){
        this.setState({
            editResBtn: data,
            editReservation: reservation
        });
        console.log('Executed?', reservation)
    }

    editReservation(reservationData) {
        var result = []; // variable to store reservation state and then modify it, before staging changes
        console.log('@ editReservation state.reservations ', this.state.reservations);
        console.log('@ editReservation reservationData ', reservationData);
        var id = reservationData.id;
        const index = this.state.reservations.map((el) => { return el.id }).indexOf(reservationData.id);
        result = result.concat(this.state.reservations);
        result.splice(index,1,reservationData);
        this.setState({
            reservations: result, 
            editResBtn: false
        });
        fetch(`/api/reservations/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData)
        })
        .then(data => {
            console.log('Success ', data);
            this.getReservations();
            // if this props.editreservation(reservationData) is moved here?
        })
        .catch(error => {
            console.error('Error: ', error);
        });
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
    // NAVIGATION fn //
    customerNav(){
        this.setState({showCustomerTab: !this.state.showCustomerTab})
    }

    renderCustomer() {
        if ( this.state.showCustomerTab ) {
            return (
                <div className="container customer-info">
                    <h3>Customer Info</h3>
                    <CustomerForm 
                        addNewCustomer={this.addNewCustomer}
                        editCustomer={this.editCustomer} 
                        customer={this.state.editCustomer} 
                        edit={this.state.editCustBtn} 
                    />
                    <table id="customer">
                        <thead>
                            <tr>
                                <th>ID</th><th>First Name</th><th>Last Name</th><th>DOB</th>
                                <th>Driver's License #</th><th>Driver's License Exp</th>
                                <th>Country</th><th>State</th><th>Edit</th><th>Delete</th>
                            </tr>
                        </thead>
                        <CustomerList 
                            onHideCustomer={this.hideCustomer} 
                            onClickEditCustomer={this.onClickEditCust} 
                            customers={this.state.customers} 
                        />
                    </table>
                </div>
            )
        } else { return null; }
    }

    vehicleNav(){
        this.setState({showVehicleTab: !this.state.showVehicleTab})
    }

    renderVehicle() {
        if ( this.state.showVehicleTab ) {
            return (
                <div className="container vehicle-info">
                 <h3>Vehicle Info</h3>
                 <VehicleForm 
                    addNewVehicle={this.addNewVehicle}
                    editVehicle={this.editVehicle}
                    vehicle={this.state.editVehicle}
                    edit={this.state.editVehBtn}
                />
                 <table id="vehicle">
                     <thead>
                        <tr>
                            <th>V_ID</th><th>Year</th><th>Make</th><th>Model</th>
                            <th>VIN Number</th><th>Color</th><th>Miles</th>
                            <th>Edit</th><th>Delete</th>
                        </tr>
                     </thead>
                 <VehicleList 
                    onHideVehicle={this.hideVehicle}
                    onClickEditVehicle={this.onClickEditVeh}
                    vehicles={this.state.vehicles} 
                />
                 </table>
             </div>
            )
        } else { return null; }
    }

    reservationNav(){
        this.setState({showReservationTab: !this.state.showReservationTab})
    }

    renderReservation() {
        if ( this.state.showReservationTab ) {
            return (
            <div className="container reservation-info">
                <h3>Reservation Info</h3>
                <ReservationForm 
                    addNewReservation={this.addNewReservation}
                    editReservation={this.editReservation}
                    reservation={this.state.editReservation}
                    edit={this.state.editResBtn}
                />
                <table id="reservation">
                    <thead>
                        <tr>
                            <th>Rental ID</th><th colSpan="3">Primary Driver</th><th colSpan="3">Secondary Driver</th>
                            <th>Vehicle ID</th><th>Date In</th><th>Date Out</th><th>Price</th><th>Edit</th><th>Delete</th>
                        </tr>
                    </thead>
                    <ReservationList 
                        onHideReservation={this.hideReservation}
                        onClickEditReservation={this.onClickEditRes}
                        reservations={this.state.reservations} />
                </table>
            </div>
            )
        } else { return null; }
    }


    //  ------- Render ------- //
    render() {
        return (
        <div id="wrapper">
            {/* Navbar */}
            <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center">
                    <img src="/penny-rent-a-car.png" />
                </a>
                <hr className="sidebar-divider my-0" />
                    <li className="nav-item active">
                        <a className="nav-link">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Forms
                </div>
                <li className="nav-item">
                    <a className="nav-link" onClick={this.customerNav}>
                        <span>New Customer</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={this.vehicleNav}>
                        <span>New Vehicle</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={this.reservationNav}>
                        <span>New Reservation</span>
                    </a>
                </li>
                <hr className="sidebar-divider" />
            </ul>
            <div className="container">
                <div className="jumbotron header">
                    <h1>Reservation Form</h1>
                    {/* <Search /> */}
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary">Home</button>
                        <button type="button" className="btn btn-primary" onClick={this.customerNav}>New Customer</button>
                        <button type="button" className="btn btn-primary" onClick={this.vehicleNav}>New Vehicle</button>
                        <button type="button" className="btn btn-primary" onClick={this.reservationNav}>New Reservation</button>
                    </div>
                </div>
                {/* --- CUSTOMER --- */}
                {this.renderCustomer()}
                {/* --- VEHICLE --- */}
                {this.renderVehicle()}
                {/* --- RESERVATION --- */}
                {this.renderReservation()}
            </div>
         </div>
        )
    }
}

export default App;