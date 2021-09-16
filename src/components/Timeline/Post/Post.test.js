import {render, screen} from "@testing-library/react";
import Post from "./Post";
import fetchPosts from "../../../api/posts";

jest.mock("../../../api/posts");
test('renders post text', () => {
    render(<Post />);
    const postElement = screen.getByText("...");

    expect(fetchPosts).toHaveBeenCalledTimes(1);
    expect(postElement).toBeInTheDocument();
});


