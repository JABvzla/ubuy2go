import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import ProductCard from '../components/product-card';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 20,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
});

class Index extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ProductCard />
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Index));
