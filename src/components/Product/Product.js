import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const OptionSize = (props) => {
    return (
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map(
            (size) => (
              <li key={size.name}>
                <button type='button'

                  className={clsx(currentSize === size.name && styles.active)}

                  onClick={() => setCurrentSize(size.name)}> {size.name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  };

  const OptionColor = (props) => {
    const prepareColorClassName = (color) => {
      return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    };
    return (
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map((color) => (
            <li key={color}>
              <button type='button' className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} onClick={() => setCurrentColor(color)}></button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice}$</span>
        </header>
        <form>
          <OptionSize sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
          <div className={styles.colors}>

            <OptionColor colors={props.colors} currentColor={currentColor} prepareColorClassName={props.prepareColorClassName} setCurrentColor={setCurrentColor} />
          </div>

          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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