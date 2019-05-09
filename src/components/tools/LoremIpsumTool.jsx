import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import Clipboardable from '../elements/Clipboardable';

import './LoremIpsumTool.scss';

class LoremIpsumTool extends React.Component {
  static getDerivedStateFromProps({ value }) {
    if (!value || !value.match(/lorem/)) {
      return {
        text: null,
      };
    }

    const lorem = new LoremIpsum();
    return {
      text: lorem.generateParagraphs(1),
    };
  }

  state = {
    text: '',
  };

  render() {
    const { text } = this.state;

    if (!text) {
      return null;
    }

    return (
      <div className="lorem-ipsum-tool clickable">
        <Clipboardable component="div" value={text}>
          {text}
        </Clipboardable>
      </div>
    );
  }
}

export default LoremIpsumTool;
