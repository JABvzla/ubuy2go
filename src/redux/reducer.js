import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    products: [],
    isAdmin: false,
    productModalOpen: false,
};

function products(state = initialState, action) {
    switch (action.type) {
    case 'PRODUCT_MODAL_TOGGLE':
        return Object.assign({}, state, {
            productModalOpen: !state.productModalOpen,
        });
    case 'SET_ADMIN':
        return Object.assign({}, state, {
            isAdmin: action.payload.isAdmin,
        });
    case 'SET_PRODUCTS':
        return Object.assign({}, state, {
            products: action.payload.products,
        });
    default:
        return state;
    }
}

const store = createStore(products, applyMiddleware(thunk));

export default store;
