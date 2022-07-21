import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from "../../store";
import Home from ".";

const mockFunction = jest.fn();

describe('Home', () => {
    beforeEach(() => {
        render(<Router><Provider store={store}><Home /></Provider></Router>);
    })   

    it('displays a h1', () => {
        const heading = screen.getByText('Welcome!')
        expect(heading.textContent).toBe('Welcome!')
    })

    it('displays the "Start a game" button', () => {
        const button = screen.getByRole('button', {name: /Start a game/i });
        expect(button).toBeInTheDocument();
    })

    it('displays the passed text', () => {
        const button =screen.getByText('Start a Game !');
        expect(button.textContent).toBe('Start a Game !');
    })

    it('triggers the passed function on click', async () => {
        const button = screen.getByRole('button', {name: /Start a game/i });
        //click needs to be done first before calling the function
        await userEvent.click(button);

        expect(mockFunction).toHaveBeenCalled();
        expect(mockFunction).toHaveBeenCalledTimes(1);
    })
})



