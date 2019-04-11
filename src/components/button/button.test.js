
import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';


describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('should render name props correctly', () => {
    const component = shallow(
      <Button name="button one" />,
    );
    expect(component).toMatchSnapshot();
  });
  it('should render value props correctly', () => {
    const component = shallow(
      <Button value="buttonone" />,
    );
    expect(component).toMatchSnapshot();
  });
});
it('should have a button required props - name and value', () => {
  const component = shallow(<Button name="button one" value="buttonone" />);
  expect(component.props().name).toBe('button one');
  expect(component.props().value).toBe('buttonone');
});

it('should call mock function when button is clicked', () => {
  const mockFn = jest.fn();
  const component = shallow(
    <Button name="button test" handleClick={mockFn} />,
  );
  component.simulate('click');
  expect(mockFn).toHaveBeenCalled();
});
