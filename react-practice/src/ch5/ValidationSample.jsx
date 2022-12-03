import './ValidationSample.css';
import React, { Component } from 'react';


class ValidationSample extends Component{
    constructor(props) 
    {
        super(props);
        this.state = {
            password: '',
            clicked: false,
            validated: false
        };
        const input = React.createRef()
    }
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.input.focus();
    }
    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    ref={(ref)=>{this.input=ref}}
                />
                <button onClick={this.handleButtonClick}>validation</button>
            </div>
        );
    }
}
export default ValidationSample;