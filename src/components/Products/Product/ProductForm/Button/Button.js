import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (<button className={clsx(styles.button, props.className)}>{props.children}</button>);
};

Button.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Button;