import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newFood } from '../actions/foodActions';

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
        this.props.newFood(food);
    }


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

Addfood.propTypes = {
    newFood: PropTypes.func.isRequired,
}

export default connect(null, { newFood })(Addfood);