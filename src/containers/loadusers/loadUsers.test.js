import React from 'react';
import { shallow } from 'enzyme';
import LoadUsers from './loadUsers';

describe('<LoadUsers />', () => {
  it('render 1 <LoadUsers /> component', () => {
    const component = shallow(<LoadUsers />);
    expect(component).toHaveLength(1);
  });
});
