// Tests for Collapsible.
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Collapsible from '../src/Collapsible';

// const wrapper = shallow(<Collapsible />);
// console.log(wrapper.debug());

describe('<Collapsbile />', () => {
  it('renders an element with the class `.Collapsible`.', () => {
    const wrapper = shallow(<Collapsible />);
    expect(wrapper.is('.Collapsible')).toEqual(true);
  });

  it('renders Collapsible with trigger text.', () => {
    const wrapper = shallow(<Collapsible trigger='Hello World'/> )
    expect(wrapper.find('span').text()).toEqual('Hello World')
  })
})