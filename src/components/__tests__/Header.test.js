import { fireEvent, render, screen } from "@testing-library/react";

import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
test("should load Header component with a login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button");
  //const loginButton = screen.getByText("Login"); //PASS
  //const loginButton = screen.getByRole("login");//fail
  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

test("should load Header component with a cart items  0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const cartItems = screen.getByText("🛒-(0 Items)");
  const cartItems = screen.getByText(/Items/);

  expect(cartItems).toBeInTheDocument();
});

test("should change login button to logout onclick ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
