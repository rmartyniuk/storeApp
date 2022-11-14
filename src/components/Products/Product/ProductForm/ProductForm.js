import styles from './ProductForm.module.scss';
import OptionSize from './OptionSize/OptionSize.js';
import OptionColor from './OptionColor/OptionColor.js';
import Button from './Button/Button.js';
import PropTypes from 'prop-types';

const ProductForm = props => {
    return (
        <form onSubmit={props.addToCart}>
            <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />

            <OptionColor colors={props.colors} currentColor={props.currentColor} prepareColorClassName={props.prepareColorClassName} setCurrentColor={props.setCurrentColor} />

            <Button className={styles.button}>
                <span className="fa fa-shopping-cart" />
            </Button>

        </form>
    )
};

ProductForm.propTypes = {
    addToCart: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm;
