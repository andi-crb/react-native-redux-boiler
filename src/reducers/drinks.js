import { combineReducers } from 'redux'
import example from './example'

export function drinksLoading(state = false, action) {
    switch (action.type) {
        case 'DRINKS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function drinks(state = [], action) {
    switch (action.type) {
        case 'DRINKS_SUCCESS':
            return action.items;
        default:
            return state;
    }
}
