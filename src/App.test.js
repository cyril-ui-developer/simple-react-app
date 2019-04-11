import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('<App />', () => {
  it('render 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});
