
import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Button name="button one" />,
    );
    expect(tree).toMatchSnapshot();
  });
});
it('should have a button value', () => {
  // const tree = shallow(
  //   <Button name='button one' />
  // );
//   expect(document.querySelector('input').this.props.name).toBe('string');
//   expect(document.querySelector('input').props.value).toEqual('button one');
});
