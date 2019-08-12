import React from 'react';
import SharingScreen from '../../app/screens/SharingScreen/sharingScreen.js';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<SharingScreen/>).toJSON();
  expect(tree).toMatchSnapshot({
      state: expect.any(String)
  });
});