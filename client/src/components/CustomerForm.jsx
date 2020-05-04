import React from 'react';

class CustomerForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            dob: '',
            dl_number: '',
            dl_country: '',
            dl_state: '',
            dl_exp: '',
            show: true
        }

        if ( this.props.edit ) {
            console.log('This is customer ', this.props.customer);
            this.setState(this.props.customer)
        } else {
            console.log(this.props.customer);
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.editState = this.editState.bind(this);
        this.onEditCustomer = this.onEditCustomer.bind(this);
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
            first_name: '',
            last_name: '',
            dob: '',
            dl_number: '',
            dl_country: '',
            dl_state: '',
            dl_exp: '',
            show: true
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('@ handleSubmit ', this.props.edit);
        this.props.edit ? this.onEditCustomer() : this.onFormSubmit();

    }

    editState(){
        console.log('editState run');
        this.setState(this.props.customer);
    }

    onEditCustomer(){
        const customerData = this.state;
        const dl_number = this.state.dl_number;
        console.log('onEditCustomer ', this.props.customer.id);
        customerData.id = this.props.customer.id;
        console.log('onEditCustomer ', customerData);
        this.props.editCustomer(customerData);
        fetch(`/api/customers/edit/${dl_number}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData)
        })
        .then(data => {
            console.log('Success ', data);
            // if this props.editCustomer(customerData) is moved here?
        })
        .catch(error => {
            console.error('Error: ', error);
        });
        this.clearForm();
    }

    onFormSubmit() {
        // event.preventDefault();
        const newCustomer = this.state; // set to equal current state
        this.props.addNewCustomer(newCustomer); // current state in Form it's sent to App through addNewCustomer fn
        fetch('/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCustomer),
        })
        .then((data) => {
            console.log('Success ', data);
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
        this.clearForm();
    }

    render() {
        
        if ( this.props.edit ) {
            // this.editState();
            var { first_name, last_name, dob, dl_number, dl_country, dl_state, dl_exp } = this.props.customer;
            console.log('Edit true ', first_name, last_name, dob, dl_number, dl_country, dl_state, dl_exp);
        } else {
            var { first_name, last_name, dob, dl_number, dl_country, dl_state, dl_exp } = this.state;
            console.log('Edit false ', first_name, last_name, dob, dl_number, dl_country, dl_state, dl_exp);
        }
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name: </label>
                    <input name="first_name"
                        value={this.state.first_name}
                        onChange={this.onInputChange}
                        placeholder="First Name"
                    />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input name="last_name"
                        value={this.state.last_name}
                        onChange={this.onInputChange}
                        placeholder="Last Name"
                    />
                    
                </div>
                <div className="form-group">
                    <label>Date of Birth: </label>
                    <input name="dob"
                        value={this.state.dob}
                        onChange={this.onInputChange}
                        placeholder="MM/DD/YYYY"
                    />
                </div>
                <div className="form-group">
                    <label>Drivers License#: </label>
                    <input name="dl_number"
                        value={this.state.dl_number}
                        onChange={this.onInputChange}
                        placeholder="Driver's License Number"
                    />
                </div>
                <div className="form-group"> 
                    <label>DL Country:</label>
                    <input name="dl_country"
                        value={this.state.dl_country}
                        onChange={this.onInputChange}
                        placeholder="Driver's License Country"
                    />
                </div>
                <div className="form-group">
                    <label>DL State: </label>
                    <input name="dl_state"
                        value={this.state.dl_state}
                        onChange={this.onInputChange}
                        placeholder="Driver's License State"
                    />
                </div>
                <div className="form-group">
                    <label>DL Expiration Date: </label>
                    <input name="dl_exp"
                        value={this.state.dl_exp}
                        onChange={this.onInputChange}
                        placeholder="MM/DD/YYYY"
                    />
                </div>
                <button className="btn btn-success">Submit</button>
                {/* { submit } */}
            </form>
        )
    }
};

export default CustomerForm;