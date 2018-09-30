import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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

        this.products = [...Array(10)];
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Header />
                <div className={classes.root}>
                    {this.products.map((_i, k) => (
                        <div key={k}>
                            <ProductCard />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Index));
