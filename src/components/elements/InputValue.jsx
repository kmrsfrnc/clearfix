import React from 'react';
import PropTypes from 'prop-types';
import { TiClipboard } from 'react-icons/ti';

import Clipboardable from './Clipboardable';

import './InputValue.scss';

class InputValue extends React.Component {
  static propTypes = {
    children: PropTypes.string,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    const { children } = this.props;

    return (
      <div className="input-value">
        <input type="text" readOnly value={children} />
        <Clipboardable value={children}>
          <TiClipboard />
        </Clipboardable>
      </div>
    );
  }
}

export default InputValue;
