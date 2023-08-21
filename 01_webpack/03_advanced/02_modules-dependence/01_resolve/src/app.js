import _ from "lodash";
// import Header from "/src/components/Header"; // 绝对路径
import Header from "./components/Header"; // 相对路径
// const math = require("/src/math"); // 绝对路径
const math = require("./math"); // 相对路径
import Body from "./components/a/b/Body";

// console.log(math.add(5, 6));
console.log(math);
console.log(_.join(["hello", "webpack"], " "));
console.log(Header());
Body();
