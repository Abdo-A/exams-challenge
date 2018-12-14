import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import RequireAuth from "../hoc/requireAuth/requireAuth";

configure({ adapter: new Adapter() });

test("should render correctly", () => {
  const loggedIn = false;
  const history = { replace: jest.fn() };
  const wrapper = shallow(
    <RequireAuth loggedIn={loggedIn} history={history} />
  );
  expect(wrapper).toMatchSnapshot();
});
