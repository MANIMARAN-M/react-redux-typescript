import User from "../User";
import { shallow, configure } from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, screen, render } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
afterEach(cleanup);
describe("User component checking", () => {
  it("Check id in the component", () => {
    render(<User />);
    const userData = screen.getByTestId("users-data");
    expect(userData).toBeInTheDocument();
  });
  var component: any;
  component = shallow(<User />);
  test("It should mount", () => {
    expect(component.length).toBe(1);
  });
  it("should render our Snapshots correctly", () => {
    expect(component).toMatchSnapshot();
  });
});
