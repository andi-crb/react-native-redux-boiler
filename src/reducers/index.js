import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './drinks';
export default combineReducers({
    drinks,
    drinksLoading
});
