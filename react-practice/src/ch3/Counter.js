import { Component } from "react";

class Counter extends Component{
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            fixedNumber: 0
        };
    };
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>value to be changeed : {number}</h1>
                <h1>value not to be changeed : {fixedNumber}</h1>
                <button onClick={() => {
                    // this.setState({ number: number + 1 });
                    // this.setState({ number: this.state.number + 1 });
                    this.setState((prevState, number) => {
                        return{ number: prevState.number + 1 };
                    }, () => {
                        console.log("앞 값이 증가");
                    });
                    this.setState((prevState, number) => ({
                        fixedNumber : prevState.fixedNumber + 1
                    }), () => {
                        console.log("뒷 값이 증가");
                    });
                }}>
                +1
                </button>
            </div>
        );
    }
}
export default Counter;