import {render, screen} from "@testing-library/react";
import Post from "./Post";

test('renders post text', () => {
    render(<Post />);
    const userElement = screen.getByText("Loading...");
    expect(userElement).toBeInTheDocument();
});