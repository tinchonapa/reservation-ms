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
                <div className="form-group">
                    <label>VehicleID: </label>
                    <input name="vId"
                        value={this.state.vId}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Year: </label>
                    <input name="year"
                        value={this.state.year}
                        onChange={this.onInputChange}
                        placeholder="YYYY"
                    />
                </div>
                <div className="form-group">
                    <label>Make: </label>
                    <input name="make"
                        value={this.state.make}
                        onChange={this.onInputChange}
                        placeholder="Make"
                    />
                </div>
                <div className="form-group">
                    <label>Model: </label>
                    <input name="model"
                        value={this.state.model}
                        onChange={this.onInputChange}
                        placeholder="Model"
                    />
                </div>
                <div className="form-group">
                    <label>VIN#: </label>
                    <input name="vin"
                        value={this.state.vin}
                        onChange={this.onInputChange}
                        placeholder="16 Char VIN Number"
                    />
                </div>
                <div className="form-group">
                    <label>Color: </label>
                    <input name="color"
                        value={this.state.color}
                        onChange={this.onInputChange}
                        placeholder="Color"
                    />
                </div>
                <div className="form-group">
                    <label>Miles: </label>
                    <input name="miles"
                        value={this.state.miles}
                        onChange={this.onInputChange}
                        placeholder="Current Miles"
                    />
                </div>
                <button className="btn btn-success">Add Vehicle</button>                
            </form>
        )
    }
};

export default VehicleForm;

//1HGBH41JXMN109186