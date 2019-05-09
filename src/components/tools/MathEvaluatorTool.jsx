import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mexp from 'math-expression-evaluator';

import BigValue from '../elements/BigValue';

class MathEvaluatorTool extends Component {
  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: undefined,
  };

  static getDerivedStateFromProps({ value }) {
    try {
      return {
        result: `${mexp.eval(value)}`,
      };
    } catch (err) {
      return {
        result: undefined,
      };
    }
  }

  state = {
    result: undefined,
  };

  render() {
    const { value } = this.props;
    const { result } = this.state;

    if (!result || result === value) {
      return null;
    }

    return (
      <React.Fragment>
        <h3>Calculator</h3>
        <BigValue prefix={`${value} =`}>
          {result}
        </BigValue>
      </React.Fragment>
    );
  }
}

export default MathEvaluatorTool;
