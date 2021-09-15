import {render, screen} from "@testing-library/react";
import Footer from "./Footer";

test('renders footer text', () => {
    render(<Footer />);
    const footerElement = screen.getByText("© 2021 BOOLGRAM FROM BOOLEAN");
    expect(footerElement).toBeInTheDocument();
});