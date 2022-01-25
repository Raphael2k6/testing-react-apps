import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting'

describe("Greeting component", () => {
    test("renders Hello World as a text", () => {
        render(<Greeting />)
        const helloWorldElement  = screen.getByText('Hello World', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders good to see you if the button was NOT clicked", () => {
        render(<Greeting />);

        const outputElement  = screen.getByText("It's good to see you", {exact: false});
        expect(outputElement).toBeInTheDocument();
    });

    test("renders 'Changed!' if the button was clicked", () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText("Changed!")
        expect(outputElement).toBeInTheDocument();
    })

    test("'<p>It's good to see you</p>' not visible after the button is clicked", () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText("It's good to see you");
        // expect(outputElement).not.toBeInTheDocument();
        expect(outputElement).toBeNull();
    })
})

