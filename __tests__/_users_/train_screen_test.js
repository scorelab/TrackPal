import React from 'react';
import TrainScreen from '../../app/screens/TrainScreen/trainScreen';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<TrainScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});