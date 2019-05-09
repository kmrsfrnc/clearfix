import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'react-clipboard.js';
import Tooltip from '@material-ui/core/Tooltip';

class Clipboardable extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    value: '',
    children: '',
  };

  state = {
    isSuccess: false,
  };

  toggleIsSuccess = (callback) => {
    this.setState(({ isSuccess }) => ({
      isSuccess: !isSuccess,
    }), callback);
  };

  onSuccess = () => {
    this.toggleIsSuccess(() => {
      setTimeout(this.toggleIsSuccess, 1500);
    });
  };

  render() {
    const { children, value, ...otherProps } = this.props;
    const { isSuccess } = this.state;

    return (
      <Tooltip placement="right" open={isSuccess} title="Copied" {...otherProps}>
        <Clipboard data-clipboard-text={value} onSuccess={this.onSuccess}>
          {children}
        </Clipboard>
      </Tooltip>
    );
  }
}

export default Clipboardable;
