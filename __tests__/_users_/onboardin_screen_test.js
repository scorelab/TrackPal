import React from 'react';
import OnboardingScreen from '../../app/screens/Onboarding/onboardingScreen.js';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<OnboardingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});