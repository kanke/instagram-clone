import {render, screen} from "@testing-library/react";
import Header from "./Header";

test('renders header text', () => {
    render(<Header />);
    const linkElement = screen.getByText("Boolgram");
    expect(linkElement).toBeInTheDocument();
});

test('renders search bar', () => {
    render(<Header />);
    const searchElement = screen.getByPlaceholderText(" Search");
    expect(searchElement).toBeInTheDocument();
});

test('renders icons', () => {
    render(<Header />);
    const navigationElement = screen.getByRole("navigation");
    const imgElement = screen.getByRole("img");
    expect(navigationElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
});