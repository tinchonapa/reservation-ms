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
            vehicles: []
        }
        this.addNewCustomer = this.addNewCustomer.bind(this);
        this.addNewVehicle = this.addNewVehicle.bind(this);
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

    addNewCustomer(newCustomerData) {
        const id = this.state.customers.length + 1;
        newCustomerData.id = id;
        const newCustomer = this.state.customers.concat(newCustomerData);
        this.setState({
            customers: newCustomer
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
                <CustomerList customers={this.state.customers} />
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