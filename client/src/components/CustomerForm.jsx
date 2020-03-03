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
            dlExp: ''
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
        const newCustomer = this.state;
        this.props.addNewCustomer(newCustomer);
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
                <label>
                    First Name:
                    <input name="fName"
                        value={this.state.fName}
                        onChange={this.onInputChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input name="lName"
                        value={this.state.lName}
                        onChange={this.onInputChange}
                    />
                </label>
                <br />
                <label>
                    Date of Birth:
                    <input name="dob"
                        value={this.state.dob}
                        onChange={this.onInputChange}
                    />
                </label>
                <br />
                <label>
                    Drivers License#:
                    <input name="dlN"
                        value={this.state.dlN}
                        onChange={this.onInputChange}
                    />
                </label>
                <br />
                <label>
                    DL Country:
                    <input name="dlCountry"
                        value={this.state.dlCountry}
                        onChange={this.onInputChange}
                    />
                </label>
                <br />
                <label>
                    DL State:
                    <input name="dlState"
                        value={this.state.dlState}
                        onChange={this.onInputChange}
                    />
                </label>
                <br />
                <label>
                    DL Expiration Date:
                    <input name="dlExp"
                        value={this.state.dlExp}
                        onChange={this.onInputChange}
                    />
                </label>
                <br />
                <button>Add Customer</button>
            </form>
        )
    }
};

export default CustomerForm;