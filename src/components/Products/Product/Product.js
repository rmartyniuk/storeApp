import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from './ProductImage/ProductImage.js';
import ProductForm from './ProductForm/ProductForm.js'

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);

  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    return (props.basePrice + props.sizes.find((size) => currentSize === size.name).additionalPrice);
  }, [props.basePrice, props.sizes, currentSize]);

  const addToCart = event => {
    event.preventDefault();
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice);
    console.log('Size: ', currentSize);
    console.log('Colour: ', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>

        <ProductForm colors={props.colors} sizes={props.sizes} addToCart={addToCart} currentColor={currentColor} setCurrentColor={setCurrentColor} currentSize={currentSize} setCurrentSize={setCurrentSize} />

      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};



export default Product;