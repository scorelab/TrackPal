import React from 'react';
import SignIn from '../app/screens/SignUpScreen/signUpScreen.js';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<SignIn />).toJSON();
  expect(tree).toMatchSnapshot();
});