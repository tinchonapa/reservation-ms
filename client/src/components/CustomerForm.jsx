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
            first_name: '',
            last_name: '',
            dob: '',
            dl_number: '',
            dl_country: '',
            dl_state: '',
            dl_exp: ''
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
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
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>First Name: </label>
                    <input name="first_name"
                        value={this.state.first_name}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input name="last_name"
                        value={this.state.last_name}
                        onChange={this.onInputChange}
                    />
                    
                </div>
                <div className="form-group">
                    <label>Date of Birth: </label>
                    <input name="dob"
                        value={this.state.dob}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Drivers License#: </label>
                    <input name="dl_number"
                        value={this.state.dl_number}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="form-group"> 
                    <label>DL Country:</label>
                    <input name="dl_country"
                        value={this.state.dl_country}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>DL State: </label>
                    <input name="dl_state"
                        value={this.state.dl_state}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>DL Expiration Date: </label>
                    <input name="dl_exp"
                        value={this.state.dl_exp}
                        onChange={this.onInputChange}
                    />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        )
    }
};

export default CustomerForm;