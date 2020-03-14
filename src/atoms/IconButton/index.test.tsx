import React from 'react';
import { shallow } from 'enzyme';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import IconButton from '../IconButton';

describe('IconButton',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<IconButton icon={faSearch} onClick={handleClick}/>);
    wrapper.simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });
});