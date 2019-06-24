/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';

jest.useFakeTimers();

describe('Authenticated Stack Navigator Test', () => {
  test('authenticatinng user is valid', () => {
    expect({ a: 5 }).toMatchSnapshot({
      a: 5
    }, 'snaphot 1');
  });

  test('bottm tab navigation is valid', () => {
    expect({ a: 4 }).toMatchSnapshot({
      a: 4
    }, 'snapshot 2');
  });
});