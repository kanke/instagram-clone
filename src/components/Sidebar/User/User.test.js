import {render, screen} from "@testing-library/react";
import User from "./User";

test('renders user text', () => {
    render(<User />);
    const userElement = screen.getByRole("button");
    expect(userElement).toBeInTheDocument();
});