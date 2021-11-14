import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFood } from '../actions/foodActions';
import FoodCard from '../components/food';
// connects you to the store
import Addfood from './addfood'
// Container Component
class Food extends Component {
    
    // On dom load. Bring in existing food on list.
    componentDidMount() {
        this.props.fetchFood();
    }
    // Dispatch - store - fetch food | props connects to store

    // Food iteration // Container Component Props to Child Component
    foodItems = () => this.props.foods.map(food => (
        <div key={food.id}>
            <h3>{food.name}</h3>
            <p>{food.amount}</p>
        </div>
    ));
    
    render() {
        return (
            <div>
                <p><FoodCard /></p>
                <h3><Addfood /></h3>
                <h1>Food Container</h1>
                { this.foodItems() }
            </div>
        )
    }
}

Food.propTypes = {
    fetchFood: PropTypes.func.isRequired,
    foods: PropTypes.array.isRequired,
    newFood: PropTypes.object
};

// State props from store
const mapStateToProps = state => ({
    foods: state.foods.foods,
    newFood: state.foods.food
})

export default connect(mapStateToProps, { fetchFood })(Food);