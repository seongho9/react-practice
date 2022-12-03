import { Component } from "react";


class EventPractice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            message: ""   
        }
        
    }
    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     })
    // }
    // handleClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     });
    // }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        alert(this.state.username+' '+this.state.message);
        this.setState({
            message: '',
            username: ''
        })
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>event practice</h1>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="username input here"
                    onChange={this.handleChange} />
                <input 
                    type="text"
                    name="message"
                    value={this.state.message}
                    placeholder="message input here"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} />
                <button onClick={this.handleClick}>확인</button>
            </div>
            
        );
    }
}
export default EventPractice;