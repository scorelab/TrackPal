import React from "react";
import Login from "../app/screens/LoginScreen/loginScreen.js";

import renderer from "react-test-renderer";

jest.useFakeTimers();

test("renders correctly", () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});
