
function getProducts() {
    return async (dispatch) => {
        await setTimeout(() => {
            dispatch({
                type: 'SET_PRODUCTS',
                payload: {
                    products: [
                        ...Array(15),
                    ],
                },
            });
        },
        1500);
    };
}

const Actions = {
    getProducts,
};

export default Actions;
