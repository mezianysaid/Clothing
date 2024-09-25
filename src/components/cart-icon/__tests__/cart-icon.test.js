import { screen } from "@testing-library/react";
import CartIcon from "../cart-icon.component";
import { renderWithProviders } from "../../../utils/tests/utils.test";

describe("Cart Icon tests", () => {
  test("Uses preloaded", () => {
    const initialCartItems = [
      {
        id: 1,
        name: "item A",
        imageUrl: "test",
        price: 124,
        quantity: 1,
      },
    ];
    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });
    const cartIconElement = screen.getByTestId("cartcout");
    expect(cartIconElement).toBeInTheDocument();
  });
});
