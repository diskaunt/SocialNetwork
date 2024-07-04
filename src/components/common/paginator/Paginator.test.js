import TestRenderer from "react-test-renderer";
import Paginator from "./Paginator";
import IconChevronRight from "./IconChevronRight";

describe("Paginator component test", () => {
  test("pages count is 11 but should be showed only 10", () => {
    const testRenderer = TestRenderer.create(
      <Paginator totalItemsCount={11} pageSize={1} portionSize={10} />
    );
    const testInstance = testRenderer.root;
    const spans = testInstance.findAllByType("span").length;
    expect(spans).toBe(10);
  });

  test("if pages count is more then 10 button next should be present", () => {
    const testRenderer = TestRenderer.create(
      <Paginator totalItemsCount={11} pageSize={1} portionSize={10} />
    );
    const testInstance = testRenderer.root;
    const btn = testInstance.findAllByType(IconChevronRight);
    expect(btn.length).toBe(1);
  });
});
