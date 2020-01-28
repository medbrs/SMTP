import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
// import Reducer from '../reducers/Reducer'
import RootReducer from '../reducers'


const middleware = [thunk];

const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;