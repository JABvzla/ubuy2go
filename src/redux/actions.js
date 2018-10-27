import firebaseApp, { database } from '../firebase';
import store from './reducer';
// User require to solve firebase.auth 'undefined' bug.
require('firebase/auth');

const productsRef = database.ref('products');

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
        dispatch({
            type: 'SET_PRODUCTS',
            payload: {
                products: [],
            },
        });
        await productsRef.once('value').then((snapshot) => {
            const products = [];
            snapshot.forEach((value) => { products.push({ key: value.ref.path.pieces_[1], ...value.val() }); });
            dispatch({
                type: 'SET_PRODUCTS',
                payload: {
                    products,
                },
            });
        });
    };
}

function addProduct() {
    return productsRef.push().set({ ...store.getState().productModal, key: null });
}

function updateProduct() {
    const state = store.getState();
    return productsRef
        .child(state.productModal.key)
        .update({ ...state.productModal, key: null });
}

function saveProduct() {
    return async (dispatch) => {
        if (store.getState().productProcessing) return;

        dispatch({ type: 'PRODUCT_PROCESSING' });

        if (store.getState().productModal.key) {
            return updateProduct().then(() => {
                dispatch({ type: 'PRODUCT_SUCCESS' });
            });
        }
        return addProduct().then(() => {
            dispatch({ type: 'PRODUCT_SUCCESS' });
        });
    };
}

function removeProduct(child) {
    return async (dispatch) => {
        if (store.getState().productProcessing) return;
        dispatch({ type: 'PRODUCT_PROCESSING' });
        return productsRef.child(child).remove().then(() => {
            dispatch({ type: 'PRODUCT_SUCCESS' });
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
    saveProduct,
    removeProduct,
    getProducts,
    login,
    logout,
    toggleProductModal,
    setProductModal,
};

export default Actions;
