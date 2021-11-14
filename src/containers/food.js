import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFood } from '../actions/foodActions';
// connects you to the store
import Addfood from './addfood'
// Container Component
class Food extends Component {
    
    // On dom load. Bring in existing food on list.
    componentDidMount() {
        this.props.fetchFood();
    }

    getDerivedStateFromProp(nextProps) {
        if (nextProps.newFood) {
            this.props.foods.unshift(nextProps.newFood);
        }
    }
    // Food iteration
    // Container Component Props to Child Component
    render() {
        let foodItems = this.props.foods.map(food => (
            <div key={food.id}>
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

Food.propTypes = {
    fetchFood: PropTypes.func.isRequired,
    foods: PropTypes.array.isRequired,
    newFood: PropTypes.object
};

const mapStateToProps = state => ({
    foods: state.foods.foods,
    newFood: state.foods.food
})

export default connect(mapStateToProps, { fetchFood })(Food);