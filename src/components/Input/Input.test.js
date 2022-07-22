import React from "react";
import Input from ".";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";


describe('Input component', () => {
    beforeEach(() => {
        render(<Input />)
    })

    it('displays a h2', () => {
        const heading = screen.getByText('Spin the Wheel to get your theme!')
        expect(heading.textContent).toBe('Spin the Wheel to get your theme!')
    })
    
})
