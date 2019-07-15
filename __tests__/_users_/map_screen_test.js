import React from 'react';
import MapScreen from '../../app/screens/MapScreen/mapScreen.js';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<MapScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});