import {render, screen} from "@testing-library/react";
import Header from "../../components/Header/Header";
import Timeline from "../../components/Timeline/Timeline";

describe('renders dashboard elements', () => {
    test('renders header text', () => {
        render(<Header/>);
        const linkElement = screen.getByText("Boolgram");
        expect(linkElement).toBeInTheDocument();
    });

    test('renders story timeline element', () => {
        render(<Timeline/>);
        const userElement = screen.getByTestId("story-box");
        expect(userElement).toBeInTheDocument();
    });

    test('renders post timeline element', () => {
        render(<Timeline/>);
        const userElement = screen.getByTestId("post-box");
        expect(userElement).toBeInTheDocument();
    });
});
