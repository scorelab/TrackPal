import React from 'react';
import ProfileScreen from '../../app/screens/ProfileScreen/profileScreen';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<ProfileScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});