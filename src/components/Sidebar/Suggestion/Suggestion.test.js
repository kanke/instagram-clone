import {render, screen} from "@testing-library/react";
import Suggestion from "./Suggestion";

test('renders suggestion text', () => {
    render(<Suggestion />);
    const suggestionElement = screen.getByText("Suggestions For You");
    expect(suggestionElement).toBeInTheDocument();
});