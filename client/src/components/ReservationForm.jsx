import React from 'react';

class ReservationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            customer1_id: '', 
            customer2_id: '',
            vehicle_id: '',
            date_in: '', 
            date_out: '', 
            price: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onEditReservation = this.onEditReservation.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onInputChange(event) {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({
            [key]: value
        });
    }

    clearForm() {
        this.setState({
            customer1_id: '', 
            customer2_id: '',
            vehicle_id: '',
            date_in: '', 
            date_out: '', 
            price: ''
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('@ handleSubmit ', this.props.edit);
        this.props.edit ? this.onEditReservation() : this.onFormSubmit();

    }

    onEditReservation(){
        const reservationData = this.state;
        const id = this.props.reservation.id;
        console.log('onEditreservation ', this.props.reservation.id);
        reservationData.id = this.props.reservation.id;
        console.log('onEditreservation ', reservationData);
        this.props.editReservation(reservationData);
    }
        

    onFormSubmit() {
        event.preventDefault();
        const newReservation = this.state;
        console.log(`New reservation -> ${newReservation}`)
        this.props.addNewReservation(newReservation);
        fetch('/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReservation),
        })
        .then((data) => {
            console.log('Success ', data);
        })
        .catch((error) => {
            console.error('Error ', error);
        });
        this.clearForm();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Driver 1: </label>
                    <input name='customer1_id'
                        value={this.state.customer1_id}
                        onChange={this.onInputChange}
                        placeholder="Customer ID"
                    />
                </div>
                <div className="form-group">
                    <label>Driver 2: </label>
                    <input name='customer2_id'
                        value={this.state.customer2_id}
                        onChange={this.onInputChange}
                        placeholder="Customer ID"
                    />
                </div>
                <div className="form-group">
                    <label>Vehicle ID: </label>
                    {/* <select> */}
                    <input name='vehicle_id'
                        value={this.state.vehicle_id}
                        onChange={this.onInputChange}
                        placeholder="Vehicle ID"
                    />
                </div>
                <div className="form-group">
                    <label>Date In: </label>
                    <input name='date_in'
                        value={this.state.date_in}
                        onChange={this.onInputChange}
                        placeholder="MM/DD/YYYY"
                    />
                </div>
                <div className="form-group">
                    <label>Date Out: </label>
                    <input name='date_out'
                        value={this.state.date_out}
                        onChange={this.onInputChange}
                        placeholder="MM/DD/YYYY"
                    />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input name='price'
                        value={this.state.price}
                        onChange={this.onInputChange}
                        placeholder="$$$"
                    />
                </div>
                <button className="btn btn-success">Add Reservation</button>
            </form>
        )
    }
};

export default ReservationForm;