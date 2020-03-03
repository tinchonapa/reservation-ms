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

    onFormSubmit(event) {
        event.preventDefault();
        const newReservation = this.state;
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
            <form onSubmit={this.onFormSubmit}>
                <label>
                    Driver 1:
                    <input name='customer1_id'
                        value={this.state.customer1_id}
                        onChange={this.onInputChange}
                        placeholder="Customer ID"
                    />
                </label>
                <label>
                    Driver 2:
                    <input name='customer2_id'
                        value={this.state.customer2_id}
                        onChange={this.onInputChange}
                        placeholder="Customer ID"
                    />
                </label>
                <label>
                    Vehicle ID:
                    {/* <select> */}
                    <input name='vehicle_id'
                        value={this.state.vehicle_id}
                        onChange={this.onInputChange}
                        placeholder="Vehicle ID"
                    />
                </label>
                <label>
                    Date In:
                    <input name='date_in'
                        value={this.state.date_in}
                        onChange={this.onInputChange}
                        placeholder="MM/DD/YYYY"
                    />
                </label>
                <label>
                    Date Out:
                    <input name='date_out'
                        value={this.state.date_out}
                        onChange={this.onInputChange}
                        placeholder="MM/DD/YYYY"
                    />
                </label>
                <label>
                    Price:
                    <input name='price'
                        value={this.state.price}
                        onChange={this.onInputChange}
                        placeholder="$$$"
                    />
                </label>
                <button>Add Reservation</button>
            </form>
        )
    }
};

export default ReservationForm;