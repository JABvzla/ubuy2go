import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Actions from '../redux/actions';
import withRoot from '../withRoot';
import Header from '../components/header';
import ProductCard from '../components/product-card';
import ProductForm from '../components/product-form';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 10,
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        justifyContent: 'center',
        height: '100%',
    },
});

class Index extends React.PureComponent {
    constructor(props) {
        super(props);

        this.props.getProducts();
        this.logout = this.props.logout.bind(this);
        this.openNewProductModal = this.openNewProductModal.bind(this);
    }

    openNewProductModal() {
        this.props.setProductModal('key', '');
        this.props.setProductModal('title', '');
        this.props.setProductModal('image', '');
        this.props.setProductModal('price', '');
        this.props.setProductModal('description', '');
        this.props.setProductModal('link', '');
        this.props.openProductModal();
    }

    selectProduct(product) {
        this.props.setProductModal('key', product.key);
        this.props.setProductModal('title', product.title);
        this.props.setProductModal('image', product.image);
        this.props.setProductModal('price', product.price);
        this.props.setProductModal('description', product.description);
        this.props.setProductModal('link', product.link);
        this.props.openProductModal();
    }

    render() {
        const { classes, products } = this.props;

        return (
            <div>
                <Header
                    logout={this.logout}
                    openProductModal={this.openNewProductModal}
                    isAdmin={this.props.isAdmin}
                />
                <div className={classes.root}>
                    {products.length
                        ? products.map((product, k) => (
                            <div key={k}>
                                <ProductCard
                                    key={product.key}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    description={product.description}
                                    link={product.link}
                                    isAdmin={this.props.isAdmin}
                                    onUpdateClick={() => this.selectProduct(product)}
                                    onDeleteClick={() => this.props.removeProduct(product.key)}
                                />
                            </div>
                        ))
                        : <CircularProgress />
                    }
                </div>
                <ProductForm />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAdmin: state.isAdmin,
    products: state.products,
    productModalOpen: state.productModalOpen,
});

const mapDispatchToProps = dispatch => ({
    openProductModal: () => dispatch(Actions.toggleProductModal()),
    setProductModal: (key, value) => dispatch(Actions.setProductModal(key, value)),
    removeProduct: key => dispatch(Actions.removeProduct(key)),
    getProducts: () => dispatch(Actions.getProducts()),
    logout: () => Actions.logout(),
});


export default withRoot(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Index)));
