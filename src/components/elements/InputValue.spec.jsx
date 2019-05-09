import React from 'react';
import { shallow } from 'enzyme';

import InputValue from './InputValue';

describe('InputValue', () => {
  it('matches snapshot', () => {
    expect(shallow(<InputValue>test</InputValue>)).toMatchSnapshot();
  });
});
