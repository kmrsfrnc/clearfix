/* eslint-disable prefer-destructuring */
import React from 'react';

import BigValue from '../elements/BigValue';

class RatioTool extends React.Component {
  static getDerivedStateFromProps({ value }) {
    const match = value
      .replace(/\s/g, '')
      .replace(/\//g, ':')
      .match(/([0-9]+|[a-zA-Z]+):([0-9]+|[a-zA-Z]+)=([0-9]+|[a-zA-Z]+):([0-9]+|[a-zA-Z]+)/);

    let result = null;
    let varName = null;

    if (!match) {
      return { result };
    }

    const calculate = (a, b, c) => `${(parseInt(a, 10) * parseInt(b, 10)) / parseInt(c, 10)}`;

    const isVar = a => Number.isNaN(parseInt(a, 10));

    if (isVar(match[1])) {
      result = calculate(match[2], match[3], match[4]);
      varName = match[1];
    }

    if (isVar(match[2])) {
      result = calculate(match[1], match[4], match[3]);
      varName = match[2];
    }

    if (isVar(match[3])) {
      result = calculate(match[1], match[4], match[2]);
      varName = match[3];
    }

    if (isVar(match[4])) {
      result = calculate(match[2], match[3], match[1]);
      varName = match[4];
    }

    return { result, varName };
  }

  state = {
    result: null,
    varName: '',
  };

  render() {
    const { result, varName } = this.state;

    if (!result || result.match(/NaN$/)) {
      return null;
    }

    return (
      <React.Fragment>
        <h3>Ratio</h3>
        <BigValue prefix={`${varName} =`}>
          {result}
        </BigValue>
      </React.Fragment>
    );
  }
}

export default RatioTool;
