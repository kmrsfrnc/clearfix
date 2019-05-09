import React, { Component } from 'react';
import Color from 'color';

import InputValue from '../elements/InputValue';

import './ColorTool.scss';

class ColorTool extends Component {
  static getDerivedStateFromProps({ value }) {
    try {
      return {
        color: Color(value.trim()),
      };
    } catch (err) {
      return {
        color: null,
        mix: null,
      };
    }
  }

  state = {
    color: null,
  };

  render() {
    const { color } = this.state;

    if (!color) {
      return null;
    }

    return (
      <div>
        <h2>Color</h2>
        <div className="color-tool">
          <div className="color-tool__sample" style={{ backgroundColor: color.hex() }} />
          <div className="color-tool__values">
            <InputValue>
              {`rgb(${color.rgb().array().join(',')})`}
            </InputValue>
            <InputValue>
              {color.hsl().string()}
            </InputValue>
            <InputValue>
              {color.hex()}
            </InputValue>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorTool;
