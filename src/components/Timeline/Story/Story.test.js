import {render, screen} from "@testing-library/react";
import Story from "./Story";

test('renders story text', () => {
    render(<Story />);
    const userElement = screen.getByText("Loading...");
    expect(userElement).toBeInTheDocument();
});