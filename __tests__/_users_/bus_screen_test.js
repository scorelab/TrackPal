import React from 'react';
import BusScreen from '../../app/screens/BusScreen/busScreen';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<BusScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});