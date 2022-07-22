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
        const heading = screen.getByText('Will you beat them?')
        expect(heading.textContent).toBe('Will you beat them?')
    })

    it('displays a h2', () => {
        const heading = screen.getByText('Solo mode')
        expect(heading.textContent).toBe('Solo mode')
    })

    it('displays the "Create a game" button', () => {
        const button = screen.getByRole('button', {name: /Create a game/i });
        expect(button).toBeInTheDocument();
    })

    it('displays the "Join a game" button', () => {
        const button = screen.getByRole('button', {name: /Join a game/i });
        expect(button).toBeInTheDocument();
    })

    it('displays the "Start to play" button', () => {
        const button = screen.getByRole('button', {name: /Start to play/i });
        expect(button).toBeInTheDocument();
    })

    it('displays the passed text', () => {
        const button =screen.getByText('Create a game');
        expect(button.textContent).toBe('Create a game');
    })

    it('triggers the passed function on click', async () => {
        const button = screen.getByRole('button', {name: /Create a game/i });
        //click needs to be done first before calling the function
        await userEvent.click(button);

        expect(mockFunction).toHaveBeenCalled();
        expect(mockFunction).toHaveBeenCalledTimes(1);
    })
})



