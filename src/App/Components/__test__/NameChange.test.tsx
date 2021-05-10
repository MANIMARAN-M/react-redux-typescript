import NameChanger from "../NameChanger";
import { shallow, configure } from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
afterEach(cleanup);
describe("Namechanger component tests", () => {
  const component = shallow(<NameChanger />);
  it("test sample checking", () => {
    expect(2 + 2).toBe(4);
  });
  test("It should mount", () => {
    expect(component.length).toBe(1);
  });
  it("should input length check", () => {
    const input = component.find("input");
    expect(input).toHaveLength(1);
  });
  it("should button length and content check", () => {
    const button = component.find("button");
    expect(button).toHaveLength(3);
    // expect(component.find("button").text()).toEqual("Enter");
  });
  it("should render our Snapshots correctly", () => {
    expect(component).toMatchSnapshot();
  });
});
