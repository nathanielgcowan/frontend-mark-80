import React, { Component } from 'react'
import Addfood from './addfood'
// Container Component
class Food extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            food: []
        };
    }

    // On dom load. Bring in existing food on list.
    componentDidMount() {
        fetch('http://localhost:3001/foods')
            .then(response => response.json())
            .then(data => this.setState({food: data}));
    }

    // Food iteration
    // Container Component Props to Child Component
    render() {
        let foodItems = this.state.food.map(food => ( <div key={food.id}>
            <h3>{food.name}</h3>
            <p>{food.amount}</p>
        </div>));
        return (
            <div>
                <h3><Addfood /></h3>
                <h1>Food Container</h1>
                { foodItems }
            </div>
        )
    }
}

export default Food;