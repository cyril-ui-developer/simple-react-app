import React from 'react';
import { shallow } from 'enzyme';
import AddEditUser from './addEditUser';

describe('<AddEditUser />', () => {
  it('render 1 <AddEditUser /> component', () => {
    const component = shallow(<AddEditUser />);
    expect(component).toHaveLength(1);
  });
});
