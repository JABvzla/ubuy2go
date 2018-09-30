import { database } from '../firebase';

const productsRef = database.ref('products');

function addProduct() {
    const newPostRef = productsRef.push();
    newPostRef.set({
        title: 'Producto ',
        description: 'description',
        price: 200,
    });
}

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
    getProducts,
    addProduct,
};

export default Actions;
