
export const name = "son"
const age = 30
const gender = "male"

export const getName = () => name;
export const getAge = () => age;
const getGender = () => gender;


// export default는 딱 한 개만 가능하다. 
export default {
  a: "1234",
  b: "341"
}

// 모듈에서 가져오는거 import
// 모듈에서 내보내는거 export 
