import { screen } from "@testing-library/react";
import NavigationBar from "../navigation.component";
import { renderWithProviders } from "../../../utils/tests/utils.test";
// **********************************************************************************

describe("Navgation tests", () => {
  test("it shoud render a sign in link if there is no currentUser", () => {
    renderWithProviders(<NavigationBar />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });
    // console.log(document.body.innerHTML);
    const signinLinkElement = screen.getByTestId("sign-in-button");
    expect(signinLinkElement).toBeInTheDocument();
    const signOutLinkElement = screen.queryByText("sign-out-button");
    expect(signOutLinkElement).toBeNull();
  });
  // **********************************************************************************

  test("it should render Sign Out if there is no current user", () => {
    renderWithProviders(<NavigationBar />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });
    const signinLinkElement = screen.queryByText("sign-in-button");
    expect(signinLinkElement).toBeNull();
    const signOutLinkElement = screen.getByTestId("sign-out-button");
    expect(signOutLinkElement).toBeInTheDocument();
  });
  // **********************************************************************************
  // test("it should not  render a cart dropdown is isCartOen is false ", () => {
  //   renderWithProviders(<NavigationBar />, {
  //     preloadedState: {
  //       cart: {
  //         isCartOpen: false,
  //         cartItems: [],
  //       },
  //     },
  //   });
  //   const dropdownTextElement = screen.getByText("Your cart is empty");
  //   expect(dropdownTextElement).toBeInTheDocument();
  // });
});
