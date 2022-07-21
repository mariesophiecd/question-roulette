import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../store";
import { default as Leaderboard } from ".";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

// describe("App", () => {
//   beforeEach(() => {
//     render(
//       <Router>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </Router>
//     );
//   });

//   it("should render a header", () => {
//     const header = screen.getByRole("banner");
//     expect(header).toBeInTheDocument();
//   });

//   it("displays a logo", () => {
//     const logo = screen.getByAltText("logo");
//     expect(logo).toBeTruthy();
//   });
// });
jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
}));
describe("Leaderboard", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Leaderboard />
      </Provider>
    );
  });
  it("should render a header", () => {
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
  });
});
