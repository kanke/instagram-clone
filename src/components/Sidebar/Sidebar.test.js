import {render, screen} from "@testing-library/react";
import Sidebar from "./Sidebar";

describe('renders sidebar elements', () => {
    test('renders sidebar text', () => {
        render(<Sidebar/>);
        const userElement = screen.getByText("Switch");
        expect(userElement).toBeInTheDocument();
    });

    test('renders suggestion text', () => {
        render(<Sidebar/>);
        const suggestionElement = screen.getByText("Suggestions For You");
        expect(suggestionElement).toBeInTheDocument();
    });

    test('renders footer text', () => {
        render(<Sidebar/>);
        const footerElement = screen.getByText("© 2021 BOOLGRAM FROM BOOLEAN");
        expect(footerElement).toBeInTheDocument();
    });
});