import { fireEvent, render, screen, waitFor} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mocResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should search res list for burger text input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  //console.log(searchBtn)

  const searchInput = screen.getByTestId("searchInput");
  //console.log(searchInput)

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  //screen should load 2 res cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
  //expect(searchBtn).toBeInTheDocument()
});


test("should filter top-rated restaurants", async () => {
    // Render the component
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    // Get cards before filtering
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    // Expect the initial number of cards
    expect(cardsBeforeFilter.length).toBe(20);
    // Get the button for filtering top-rated restaurants
    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    // Trigger a click on the button
    fireEvent.click(topRatedBtn);
    await waitFor(() => {
        // Get filtered cards after the click
        const cardsAfterFilter = screen.queryAllByTestId("resCard");
        // Perform assertions based on your requirements
        // For example, you might want to assert that the number of filtered cards is as expected
        expect(cardsAfterFilter.length).toBe(6);
        // Add more assertions if needed
      });
  });