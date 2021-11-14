import { FETCH_FOOD, NEW_FOOD } from './types.js';

export const fetchFood = () => dispatch => {
    // Fetch requst will go here.
    fetch('http://localhost:3001/foods')
    .then(response => response.json())
    .then(foods => dispatch({ type: FETCH_FOOD, payload: foods }) );
};

export const newFood = foodData => dispatch => {
    // New food request will go here.
    fetch('http://localhost:3001/foods', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(foodData) })
    .then(response => response.json())
    .then(food => dispatch({type: NEW_FOOD, payload: food }) );
};