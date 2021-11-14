import React, { Component } from 'react'

class Addfood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            amount: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let food = { name: this.state.name, amount: this.state.amount }
        fetch('http://localhost:3001/foods', {
            method: 'POST', headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(food) })
        .then(response => response.json())
        .then(data => console.log(data)) }


    render() {
        return (
            <div>
                <h1>Add Food</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name:</label><br />
                        <input type="text" name="name" onChange={ this.onChange } value={ this.state.name } />
                    </div>
                    <div>
                        <label>Amount:</label><br />
                        <input type="number" name="amount" onChange={ this.onChange } value={ this.state.amount } />
                    </div><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Addfood;