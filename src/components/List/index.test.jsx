import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import App from '../../App'
import { createStore } from "../../redux/store";

import List from './index'

let store
let spy

beforeEach(() => {
  store = createStore();
  spy = jest.spyOn(store, "dispatch");
});

afterAll(() => {
  spy.mockClear();
});

test("Renders the List component and shows loading... while it fetches the offers json", async () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <App>
        <List />
      </App>
    </Provider>
  );

  expect(getByText(/Loading\.\.\./i)).toBeInTheDocument()
  await waitFor(async () => {
    expect(spy).toBeCalledTimes(1);
  });
  await spy.mock.results[0].value
  expect(getByText(/offers/i)).toBeInTheDocument()
});
