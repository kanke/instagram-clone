import {render, screen} from "@testing-library/react";
import Story from "./Story";
import fetchStories from "../../../api/stories";

jest.mock("../../../api/stories");
test('renders story text', () => {
    render(<Story/>);
    const storyElement = screen.getByText("...");

    expect(fetchStories).toHaveBeenCalledTimes(1);
    expect(storyElement).toBeInTheDocument();
});