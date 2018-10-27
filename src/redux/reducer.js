import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    products: [],
    isAdmin: false,
    productProcessing: false,
    productModalOpen: false,
    productModal: {
        key: '',
        title: '',
        image: '',
        price: '',
        description: '',
        link: '',
    },
};

function products(state = initialState, action) {
    switch (action.type) {
    case 'SET_ADMIN':
        return Object.assign({}, state, {
            isAdmin: action.payload.isAdmin,
        });
    case 'SET_PRODUCTS':
        return Object.assign({}, state, {
            products: action.payload.products,
        });
    case 'PRODUCT_PROCESSING':
        return Object.assign({}, state, {
            productProcessing: true,
        });
    case 'PRODUCT_SUCCESS':
        return Object.assign({}, state, {
            productProcessing: false,
            productModalOpen: false,
        });
    case 'PRODUCT_MODAL_TOGGLE':
        return Object.assign({}, state, {
            productModalOpen: !state.productModalOpen,
        });
    case 'PRODUCT_MODAL_SET':
        return Object.assign({}, state, {
            productModal: {
                ...state.productModal,
                [action.payload.key]: action.payload.value },
        });
    default:
        return state;
    }
}

const store = createStore(products, applyMiddleware(thunk));

export default store;
