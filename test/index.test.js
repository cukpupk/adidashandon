import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import {it} from "@jest/globals";

Enzyme.configure({ adapter: new Adapter() });
it("App loads with initial state of 0", () => {
  const wrapper = shallow(<App />);
  const text = wrapper.find("strong").text();
  console.log(text)
  expect(text).toEqual("0");
});
it("Dom Render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

