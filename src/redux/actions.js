import firebaseApp, { database } from '../firebase';
import store from './reducer';
// User require to solve firebase.auth 'undefined' bug.
require('firebase/auth');

const productsRef = database.ref('products');

function addProduct() {
    const state = store.getState();

    return async () => {
        const newPostRef = productsRef.push();
        newPostRef.set({ ...state.productModal });
    };
}

function login(email, password) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
}

function logout() {
    firebaseApp.auth().signOut();
}

// Firebase event to update login state.
firebaseApp.auth().onAuthStateChanged(user => store.dispatch({
    type: 'SET_ADMIN',
    payload: { isAdmin: !!user },
}));

function getProducts() {
    return async (dispatch) => {
        await productsRef.once('value').then((snapshot) => {
            const products = [];
            snapshot.forEach((value) => { products.push(value.val()); });
            dispatch({
                type: 'SET_PRODUCTS',
                payload: {
                    products,
                },
            });
        });
    };
}

function toggleProductModal() {
    return dispatch => dispatch({ type: 'PRODUCT_MODAL_TOGGLE' });
}


function setProductModal(key, value) {
    return dispatch => dispatch({
        type: 'PRODUCT_MODAL_SET',
        payload: {
            key,
            value,
        },
    });
}


const Actions = {
    addProduct,
    getProducts,
    login,
    logout,
    toggleProductModal,
    setProductModal,
};

export default Actions;
