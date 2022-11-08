
// type module 설정

// export 시 import 방법 1
// import {name, getName, getAge} from "./module1.js"; // 여기서 가져올 수 있는 건 export한것만 가져올 수 있다.

// console.log(name);
// console.log(getName());
// console.log(getAge());

// // export 시 import 방법 2
// // import * as mod1 from "./module1.js"
// console.log(mod1.getAge());

// // export dafault 사용 시 import 방법  => 딱 한 번만 쓸 수 있다. 여러개 export default 불가능
// // import dict from "./module1.js";
// console.log("export default", dict);

console.log("hello");
