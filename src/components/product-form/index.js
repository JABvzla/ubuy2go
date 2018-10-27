import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withRoot from '../../withRoot';
import ProductCard from '../product-card';
import Actions from '../../redux/actions';


const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 5,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    card: {
        padding: '8px',
        paddingTop: '30px',
        width: '600px',
        height: '550px',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        outline: 'none',
    },
    cardActions: { display: 'flex', justifyContent: 'center' },
});

class ProductForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.saveProduct = this.props.saveProduct.bind(this);
        this.onCloseModal = this.props.closeProductModal.bind(this);
    }

    onTextChange = name => (event) => {
        this.props.setProductModal(name, event.target.value);
    };

    render() {
        const { classes, productModalOpen, productModal } = this.props;
        return (
            <div>
                <Modal
                    open={productModalOpen}
                    disableAutoFocus
                    onClose={this.onCloseModal}
                    className={classes.root}
                >
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography color="textSecondary" variant="headline" align="center" gutterBottom>Product Form</Typography>
                            <TextField
                                label="Title"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={this.onTextChange('title')}
                                value={productModal.title}
                            />
                            <TextField
                                label="Image"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={this.onTextChange('image')}
                                value={productModal.image}
                            />
                            <TextField
                                label="Price"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={this.onTextChange('price')}
                                value={productModal.price}
                            />
                            <TextField
                                label="Description"
                                fullWidth
                                multiline
                                rowsMax={3}
                                margin="normal"
                                variant="outlined"
                                onChange={this.onTextChange('description')}
                                value={productModal.description}
                            />
                            <TextField
                                label="Link"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={this.onTextChange('link')}
                                value={productModal.link}
                            />
                            <CardActions className={classes.cardActions}>
                                <Button variant="outlined" color="primary" onClick={this.saveProduct}>Guardar</Button>
                            </CardActions>
                        </CardContent>
                        <CardContent>
                            <ProductCard
                                title={productModal.title}
                                image={productModal.image}
                                price={productModal.price}
                                description={productModal.description}
                                link={productModal.link}
                            />
                        </CardContent>
                    </Card>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAdmin: state.isAdmin,
    productModalOpen: state.productModalOpen,
    productModal: state.productModal,
});

const mapDispatchToProps = dispatch => ({
    setProductModal: (key, value) => dispatch(Actions.setProductModal(key, value)),
    saveProduct: () => dispatch(Actions.saveProduct()),
    closeProductModal: () => dispatch(Actions.toggleProductModal()),
});

export default withRoot(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductForm)));
