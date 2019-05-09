import React from 'react';
import { shallow } from 'enzyme';

import BigValue from './BigValue';

describe('BigValue', () => {
  it('matches snapshot', () => {
    expect(shallow(<BigValue prefix="mock prefix">test</BigValue>)).toMatchSnapshot();
  });
});
