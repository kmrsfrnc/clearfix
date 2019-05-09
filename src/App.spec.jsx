import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

jest.mock('./components/tools', () => ({
  Tool1: () => null,
  Tool2: () => null,
}));

describe('App', () => {
  it('renders the correct header', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h1').text()).toEqual('Clearfix');
  });
});