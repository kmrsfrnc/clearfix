import React from 'react';
import PropTypes from 'prop-types';

import Clipboardable from './Clipboardable';

import './BigValue.scss';

class BigValue extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    prefix: PropTypes.string,
  };

  static defaultProps = {
    children: '',
    prefix: '',
  };

  render() {
    const { children, prefix } = this.props;

    return (
      <div className="big-value">
        <span className="big-value__prefix">
          {prefix}
        </span>
        <Clipboardable value={children} component="span">
          <strong className="clickable">
            {children}
          </strong>
        </Clipboardable>
      </div>
    );
  }
}

export default BigValue;
