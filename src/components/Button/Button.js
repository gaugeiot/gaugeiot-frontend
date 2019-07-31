import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  href: PropTypes.string
};

const defaultProps = {
  children: 'Button',
  color: 'primary'
};

const Button = ({ color, children, className, href, ...attributes }) => {
  const classes = classNames('btn', `btn--${color}`);
  let TAG = 'button';
  if (href) {
    TAG = 'a';
  }
  return (
    <TAG className={classes} href={href} {...attributes}>
      {children}
    </TAG>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
