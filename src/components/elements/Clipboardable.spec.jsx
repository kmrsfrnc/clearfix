import React from 'react';
import { shallow } from 'enzyme';

import Clipboardable from './Clipboardable';

jest.useFakeTimers();

describe('Clipboardable', () => {
  it('matches snapshot', () => {
    expect(shallow(<Clipboardable value="test">test</Clipboardable>)).toMatchSnapshot();
  });

  it('passes other props', () => {
    const otherProps = { foo: 'bar' };
    const wrapper = shallow(<Clipboardable value="test" {...otherProps}>test</Clipboardable>);

    expect(wrapper.props().foo).toEqual('bar');
  });

  it('shows a tooltip for some time on success', () => {
    const wrapper = shallow(<Clipboardable value="test">test</Clipboardable>);

    const { onSuccess } = wrapper.childAt(0).props();
    onSuccess();

    expect(wrapper.props().open).toBeTruthy();
    jest.runOnlyPendingTimers();
    expect(wrapper.props().open).toBeFalsy();
  });
});
