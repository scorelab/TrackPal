import React from 'react';
import ResetPassword from '../app/screens/ResetPasswordScreen/resetPasswordScreen.js';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<ResetPassword />).toJSON();
  expect(tree).toMatchSnapshot();
});