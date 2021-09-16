import {render, screen} from "@testing-library/react";
import Sidebar from "../Sidebar/Sidebar";
import Post from "./Post/Post";
import Story from "./Story/Story";

describe('renders timeline elements', () => {
    test('renders post text', () => {
        render(<Post/>);
        const userElement = screen.getByText("...");
        expect(userElement).toBeInTheDocument();
    });

    test('renders story text', () => {
        render(<Story/>);
        const userElement = screen.getByText("...");
        expect(userElement).toBeInTheDocument();
    });
});