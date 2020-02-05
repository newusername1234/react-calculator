import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            result: 0
        };
    }

    render() {

        return (

            <div>
                <input
                    type="number"
                    value={this.state.num1}
                    onChange={(event) => {
                        this._updateNumber('num1', event.target.value)
                    }}
                />
                <input
                    type="number"
                    value={this.state.num2}
                    onChange={(event) => {
                        this._updateNumber('num2', event.target.value)
                    }}
                />
                <br />
                <br />
                <button onClick={this._add}>+</button>
                <button onClick={this._subtract}>-</button>
                <button onClick={this._multiply}>*</button>
                <button onClick={this._divide}>/</button>
                <br />
                <div>{this.state.result}</div>
            </div>
        )
    }

    _updateNumber = (key, newNumber) => {
        this.setState({
            [key]: parseInt(newNumber, 10)
        });
    }

    _add = () => {
        this.setState({
            result: this.state.num1 + this.state.num2
        });
    }

    _subtract = () => {
        this.setState({
            result: this.state.num1 - this.state.num2
        });
    }

    _multiply = () => {
        this.setState({
            result: this.state.num1 * this.state.num2
        });
    }

    _divide = () => {
        this.setState({
            result: this.state.num1 / this.state.num2
        });
    }
}

export default Calculator;