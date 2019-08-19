import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders Shape', () => {
    const wrapper = shallow(<Shape 
      text="some text"
      color="red"
      backgroundColor="blue"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
