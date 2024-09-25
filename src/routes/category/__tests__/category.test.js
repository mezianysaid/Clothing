import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/tests/utils.test";
import Category from "../category";
import { useParams } from "react-router-dom";
// **********************************************************************************

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));
describe("Category tests", () => {
  // **********************************************************************************
  test("it should render a spinner if isLoading is true ", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });
    const spinnerElement = screen.getByTestId("spinnerOverly");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("it should render category if isLoading is false ", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [],
        },
      },
    });
    const spinnerElement = screen.queryByTestId("spinnerOverly");
    expect(spinnerElement).toBeNull();
  });
});
