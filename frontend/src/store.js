import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { carListReducer, carDetailReducer } from './reducers/carReducers';

const reducer = combineReducers({
    carList: carListReducer,
    carDetail: carDetailReducer,
});

const InitialState = {};

const middleware = [thunk];

const store = createStore(reducer, InitialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
