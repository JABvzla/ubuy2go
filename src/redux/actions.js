import firebaseApp, { database } from '../firebase';
import store from './reducer';
// User require to solve firebase.auth 'undefined' bug.
require('firebase/auth');

const productsRef = database.ref('products');

function addProduct() {
    const newPostRef = productsRef.push();
    newPostRef.set({
        title: 'Producto ',
        description: 'description',
        price: 200,
    });
}

function login(email, password) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password);
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

const Actions = {
    addProduct,
    getProducts,
    login,
    logout,
};

export default Actions;
