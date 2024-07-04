import TestRenderer from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status="3RACHA" />);
    const testInstance = testRenderer.root;
    expect(testInstance.props.status).toBe("3RACHA");

  });
});
