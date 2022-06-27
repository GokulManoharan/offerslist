import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import App from '../../App'
import { createStore } from "../../redux/store";

import Item from './index'

let store
let spy

beforeEach(() => {
  store = createStore();
  spy = jest.spyOn(store, "dispatch");
});

afterAll(() => {
  spy.mockClear();
});

test("Renders the Item component and it should render properly with the cars list", async () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App>
        <Item />
      </App>
    </Provider>
  );

  await waitFor(async () => {
    expect(spy).toBeCalledTimes(1);
  });
  await spy.mock.results[0].value
  const cars = getAllByText(/day/i)
  expect(cars.length).toBeGreaterThanOrEqual(0)
});
