import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../store";
import { default as Loading } from ".";

describe("Loading", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Loading />
      </Provider>
    );
  });
  it("should render a header", () => {
    const header = screen.getByRole("h1");
    expect(header).toBeInTheDocument();
  });
  it("should render timer", () => {
    const timer = screen.getByRole("timer");
    expect(timer).toBeInTheDocument();
  });
});
