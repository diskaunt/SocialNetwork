/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import IconChevronRight from "./IconChevronRight";
import Paginator from "./Paginator";
import { render, screen } from "@testing-library/react";

describe("Paginator component test", () => {
  test("pages count is 11, but should be showed only 10", () => {
    render(<Paginator totalItemsCount={20} pageSize={1} portionSize={10} />);
    const spans = screen.getAllByTestId("pageNumber").length;
    expect(spans).toBe(10);
  });

  test("if pages count is more then 10 button next should be present", () => {
    render(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
    const btn = screen.getAllByTestId('chevron' );
    expect(btn.length).toBe(1);
  });
});
