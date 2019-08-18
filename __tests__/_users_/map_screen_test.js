import React from "react";
import { Platform } from "react-native";
import MapScreen from "../../app/screens/MapScreen/mapScreen.js";

import renderer from "react-test-renderer";

jest.useFakeTimers();
Platform.select = jest.fn(dict => dict.android);

test("renders correctly", () => {
  const tree = renderer.create(<MapScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
