import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { carListReducer, carDetailReducer } from './reducers/carReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
    carList: carListReducer,
    carDetail: carDetailReducer,
    cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : [];

const InitialState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
};

const middleware = [thunk];

const store = createStore(reducer, InitialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
