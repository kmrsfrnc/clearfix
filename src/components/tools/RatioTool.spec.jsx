import React from 'react';
import { shallow } from 'enzyme';

import RatioTool from './RatioTool';

describe('RatioTool', () => {
  it('calculates the value', () => {
    [
      'x : 1 = 1 : 1',
      '1 : x = 1 : 1',
      '1 : 1 = x : 1',
      '1 : 1 = 1 : x',
      '1 /1 = 1 : x',
    ].forEach((value) => {
      const wrapper = shallow(<RatioTool value={value} />);
      
      expect(wrapper.childAt(1).props()).toEqual({
        prefix: 'x =',
        children: '1',
      });
    });
  });
});
