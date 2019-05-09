import React, { Component } from 'react';

import BigValue from '../elements/BigValue';

class PercentageTool extends Component {
  static getDerivedStateFromProps({ value }) {
    const cleanValue = value.replace(/\s/g, '');
    const match = cleanValue.match(/([0-9]+)%of([0-9]+)/);

    if (match) {
      return {
        match: {
          percent: parseInt(match[1], 10),
          base: parseInt(match[2], 10),
        },
      };
    }

    return {
      match: null,
    };
  }

  state = {
    match: null,
  };

  render() {
    const { match } = this.state;

    if (!match) {
      return null;
    }

    return (
      <div>
        <h3>Percentage</h3>
        <BigValue prefix={`${match.percent}% of ${match.base} is`}>
          {`${(match.base / 100) * match.percent}`}
        </BigValue>
      </div>
    );
  }
}

export default PercentageTool;
