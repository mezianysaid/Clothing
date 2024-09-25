import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/tests/utils.test";
import ProductCard from "../product-card.component";

describe("Product card test", () => {
  test("It should add item when the product card button is clicked", async () => {
    const MockProduct = {
      id: 1,
      name: "item A",
      imageUrl: "test",
      price: 10,
    };
    const { store } = renderWithProviders(
      <ProductCard product={MockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCardButtonElement = screen.getByText("Add to card");
    await fireEvent.click(addToCardButtonElement);
    // console.log(store.getState().cart.cartItems);
    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
