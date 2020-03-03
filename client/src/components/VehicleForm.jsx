import React from 'react';

class VehicleForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vId:'',
            year:'',
            make:'',
            model:'',
            vin:'',
            color:'',
            miles:''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.vIdMaker = this.vIdMaker.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onInputChange(event) {
        const key = event.target.name;
        const value = event.target.value;
        this.vIdMaker();
        this.setState({
            [key]: value
        });
    }

    vIdMaker() {
        var values = []
        values.push(this.state.year.slice(2));
        values.push(this.state.make.slice(0,1));
        values.push(this.state.model.slice(0,2));
        values.push(this.state.vin.slice(13));
        var result = values.join('');
        this.setState({
            vId: result
        });
    }

    clearForm() {
        this.setState({
            vId: '',
            year: '',
            make: '',
            model: '',
            vin: '',
            color: '',
            miles: ''
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        const newVehicle = this.state;
        this.props.addNewVehicle(newVehicle);
        fetch('/api/vehicles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVehicle)
        })
        .then(data => {
            console.log('Success ', data);
        })
        .catch(error => {
            console.error('Error: ', error);
        })
        this.clearForm();
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
                <label>
                    VehicleID:
                    <input name="vId"
                        value={this.state.vId}
                        disabled
                    />
                </label>
                <label>
                    Year:
                    <input name="year"
                        value={this.state.year}
                        onChange={this.onInputChange}
                    />
                </label>
                <label>
                    Make:
                    <input name="make"
                        value={this.state.make}
                        onChange={this.onInputChange}
                    />
                </label>
                <label>
                    Model:
                    <input name="model"
                        value={this.state.model}
                        onChange={this.onInputChange}
                    />
                </label>
                <label>
                    VIN#:
                    <input name="vin"
                        value={this.state.vin}
                        onChange={this.onInputChange}
                    />
                </label>
                <label>
                    Color:
                    <input name="color"
                        value={this.state.color}
                        onChange={this.onInputChange}
                    />
                </label>
                <label>
                    Miles:
                    <input name="miles"
                        value={this.state.miles}
                        onChange={this.onInputChange}
                    />
                </label>
                <button>Add Vehicle</button>                
            </form>
        )
    }
};

export default VehicleForm;

//1HGBH41JXMN109186