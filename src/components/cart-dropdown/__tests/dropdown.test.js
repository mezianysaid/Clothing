import { screen } from "@testing-library/react";
import CartDropdown from "../cart-dropdown.component";
import { renderWithProviders } from "../../../utils/tests/utils.test";
// **********************************************************************************

describe("Drop Down tests", () => {
  // **********************************************************************************
  test("it should not  render a cart dropdown is isCartOen is false ", () => {
    renderWithProviders(<CartDropdown />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });
    const dropdownTextElement = screen.getByText("Your cart is empty");
    expect(dropdownTextElement).toBeInTheDocument();
  });
});
