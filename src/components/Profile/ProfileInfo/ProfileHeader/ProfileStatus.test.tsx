import ProfileStatus from "./ProfileStatus";
import TestRenderer from 'react-test-renderer';

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status="3RACHA" />);
    const testInstance = testRenderer.root;
    expect(testInstance.props.status).toBe("3RACHA");

  });
});
