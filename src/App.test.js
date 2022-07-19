import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store";
import App from './App';


describe('App', () => {
  beforeEach(() => {
      render(<Router><Provider store={store}><App /></Provider></Router>);
  })

  it('should render a header', () => {
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
  })

  it("displays a logo", () => {
    const logo = screen.getByAltText("logo");
    expect(logo).toBeTruthy();
})






})

