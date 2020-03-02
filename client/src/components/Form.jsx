import React from 'react';

class Form extends React.Component {
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
        
        // checking if it works. Erase later
        console.log(key, value);

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
                    <input name="dln"
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
                    DL Experation Date:
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

export default Form;