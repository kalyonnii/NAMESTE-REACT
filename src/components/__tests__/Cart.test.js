const { render, screen, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
import { Provider } from "react-redux";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("Should load Restaurant Menu Component ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />

          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  

  const accordionHeader = screen.getByText("Breads (18)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(18);
  expect(screen.getByText("🛒-(0 Items)")).toBeInTheDocument();
  const addBtns = screen.getAllByRole("button", { name: "Add➕" });
  //console.log(addBtns.length)

  fireEvent.click(addBtns[0]);
  expect(screen.getByText("🛒-(1 Items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("🛒-(2 Items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
  expect(screen.getAllByTestId("foodItems").length).toBe(18);

  expect(screen.getByText("Cart is Empty Add Items to the cart!!!!")).toBeInTheDocument()
});
