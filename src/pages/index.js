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
    }

    render() {
        const { classes, products } = this.props;

        return (
            <div>
                <Header />
                <div className={classes.root}>
                    {products.length
                        ? products.map((_i, k) => (
                            <div key={k}>
                                <ProductCard />
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
    products: state.products,
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(Actions.getProducts()),
});


export default withRoot(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Index)));
