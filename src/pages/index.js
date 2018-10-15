import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Actions from '../redux/actions';
import withRoot from '../withRoot';
import Header from '../components/header';
import ProductCard from '../components/product-card';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 10,
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'strech',
        justifyContent: 'center',
        height: '100%',
    },
});

class Index extends React.PureComponent {
    constructor(props) {
        super(props);

        this.props.getProducts();
        this.logout = this.props.logout.bind(this);
        this.openProductModal = this.props.openProductModal.bind(this);
    }

    render() {
        const { classes, products } = this.props;

        return (
            <div>
                <Header
                    logout={this.logout}
                    openProductModal={this.openProductModal}
                    isAdmin={this.props.isAdmin}
                />
                <div className={classes.root}>
                    {products.length
                        ? products.map((product, k) => (
                            <div key={k}>
                                <ProductCard
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}
                                />
                            </div>
                        ))
                        : <CircularProgress />
                    }
                </div>
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
    getProducts: () => dispatch(Actions.getProducts()),
    logout: () => Actions.logout(),
});


export default withRoot(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Index)));
