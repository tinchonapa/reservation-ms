import React from 'react';

class CustomerForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fName: '',
            lName: '',
            dob: '',
            dlN: '',
            dlCountry: '',
            dlState: '',
            dlExp: '',
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
            fName: '',
            lName: '',
            dob: '',
            dlN: '',
            dlCountry: '',
            dlState: '',
            dlExp: ''
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
                    <input name="fName"
                        value={this.state.fName}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input name="lName"
                        value={this.state.lName}
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
                    <input name="dlN"
                        value={this.state.dlN}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="form-group"> 
                    <label>DL Country:</label>
                    <input name="dlCountry"
                        value={this.state.dlCountry}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>DL State: </label>
                    <input name="dlState"
                        value={this.state.dlState}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>DL Expiration Date: </label>
                    <input name="dlExp"
                        value={this.state.dlExp}
                        onChange={this.onInputChange}
                    />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        )
    }
};

export default CustomerForm;