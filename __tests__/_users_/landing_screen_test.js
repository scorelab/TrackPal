import React from 'react';
import LandingScreen from '../../app/screens/LandingScreen/landingScreen.js';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<LandingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});