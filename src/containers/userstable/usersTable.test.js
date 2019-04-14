import React from 'react';
import { shallow } from 'enzyme';
import UsersTable from './usersTable';

describe('<LoadUsers />', () => {
  it('render 1 <LoadUsers /> component', () => {
    const component = shallow(<UsersTable />);
    expect(component).toHaveLength(1);
  });
});
