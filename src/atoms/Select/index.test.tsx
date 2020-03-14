import React from 'react';
import { shallow } from 'enzyme';

import Select from '../Select';

describe('Select',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Select options={[]} onClick={handleClick}/>);
    wrapper.simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });

  it('change event', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<Select options={[]} onChange={handleChange}/>);
    wrapper.simulate('change');
    expect(handleChange.mock.calls.length).toBe(1);
  });
});