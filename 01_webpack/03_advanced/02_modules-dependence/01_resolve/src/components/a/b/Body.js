// const math = require("../../../math.js"); // 相对路径
const math = require("@/math.js"); // 模块路径
function Body() {
    console.log(math.add(4, 5));
}

export default Body;
