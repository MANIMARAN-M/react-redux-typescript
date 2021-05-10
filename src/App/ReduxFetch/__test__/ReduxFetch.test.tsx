import ReduxFetch from "../ReduxFetch";
import { shallow, configure } from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe("ReduxFetch component checking", () => {
  const ReduxFet = shallow(<ReduxFetch />);
  //   test("It should mount", () => {
  //     expect(ReduxFet.length).toBe(1);
  //   });
  it("should render our Snapshots correctly", () => {
    expect(ReduxFet).toMatchSnapshot();
  });
});
