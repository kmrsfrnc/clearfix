import React from 'react';
import { shallow } from 'enzyme';

import ColorTool from './ColorTool';

describe('ColorTool', () => {
  it('parses color by name', () => {
    expect(shallow(<ColorTool value="whitesmoke" />)).toMatchSnapshot();
  });

  it('parses color by hex', () => {
    expect(shallow(<ColorTool value="#F5F5F5" />)).toMatchSnapshot();
  });

  it('parses color by rgb', () => {
    expect(shallow(<ColorTool value="rgb(245,245,245)" />)).toMatchSnapshot();
  });

  it('renders null if not a color', () => {
    expect(shallow(<ColorTool value="round" />).type()).toBeNull();
  });
});
