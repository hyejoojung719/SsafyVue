console.log("array_function.js");

{
  let arr = [1, 2, 3, 4, 5];
  
  //  1 3 5 만 꺼내고 싶을 때 
  function filter(array, callback) {
    let newArr = [];
    for (let i = 0; i < array.length; i++){

      if(callback(array[i], i ,array)) newArr.push(array[i]);

    }
    return newArr;
  }

  let arr3  = filter(arr, (value) =>  value%2==1)
  console.log("filter : ", arr3);

  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i])
  // }

  function forEach(array, callback) {
    for (let i = 0; i < arr.length; i++){
      // 여기서 arr[i]가 필요
      callback(arr[i], i, array);
    }
  }

  // forEach(arr, (value) => console.log(value));
  forEach(arr, (value, index) => {
    console.log(value,index, arr)
  });

  // 아래 2개는 같은거
  // let arr2 = new Array();
  // let arr3 = [];

  let arr2 = new Array();
  function MyArray() {
    this.arr = [];
  }

  // prototype : 원형 객체

  // 메소드는 protoype에 정의하는게 좋다

  MyArray.prototype.push = function (data) {
    this.arr.push(data);
  }

  MyArray.prototype.forEach = function (callback) {
    for (let i = 0; i < this.arr.length; i++){
      callback(this.arr[i], i, this.arr);
    }
  }

  let array = new MyArray();
  array.push(1)
  array.push(2)
  array.push(3)

  array.forEach((value) => console.log(value));
  console.log(array)  
  
}

//push - 배열의 맨 뒤에 값 추가
{
  let array = ['A', 'B', 'C', 'D'];
  array.push("E")
  console.log(array);
  array.push("F","G")
  console.log(array);
}
//pop - 배열의 맨 뒤에 값 꺼내기
{
  console.clear()
  let array = ['A', 'B', 'C', 'D'];
  let result = array.pop();

  console.log(result);
  console.log(array);
}

// join - 배열을 합쳐서 하나의 문자열로 만들기
{
  console.clear()
  let array = ['A', 'B', 'C', 'D'];

  let result = array.join(" ")
  console.log(result);
  console.log(array)
}

// split - 문자열을 특정 문자기준으로 쪼개서 배열로 만들기
{
  console.clear()
  let str = 'A,B,C,D'

  let result = str.split(",")
  console.log(result)
  console.log(str);

  //limit 지정
  let result2 = str.split(",", 3)
  console.log(result2);
}

// reverse - 배열의 순서 뒤집기
{
  console.clear()
  let array = ['A', 'B', 'C', 'D'];

  let result = array.reverse()
  
  console.log(result)
  console.log(array);

  //원본과 반환값이 같은 배열을 참조 중
  result[0] = 'F'
  console.log(result)
  console.log(array);
}

// slice - 배열의 요소 중 특정 구간의 요소 배열 반환
{
  console.clear();
  let array = ['A', 'B', 'C', 'D']

  // 1,2 인덱스 요소 가져오기
  let result = array.slice(1, 3) // 원본값을 바꿔주는게 아님
  console.log(array)
  console.log(result)

  result[0] = 'F'
  console.log(array)  
  console.log(result);
}

// splice - 배열의 특정 구간의 요소를 삭제할 때 
{
  console.clear()
  let array = ['A', 'B', 'C', 'D']

  // 1~2 인덱스 요소 제거
  let result = array.splice(1, 3) 
  console.log("원본 배열 : " , array)
  console.log("결과 배열 : ", result)
}

//객체 배열에서 사용하기 좋은 함수
class User{
  constructor(name, age, gender, addr) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.addr = addr;
  }
}
let users = [
  new User("son", 30, 'male', 'london'),
  new User("hwang", 26, 'male', 'seoul'),
  new User("zoo", 37, 'female', 'gumi'),
  new User("joe", 29, 'female', 'daegu')
]
console.log(users);

// filter 함수 - 배열에서 결과를 만족하는 모든 요소를 반환하는 함수
{
  console.clear();

  let result = users.filter((value) => {
    return value.addr.includes("o")
  })
  console.log(result)
}

// find - 조건을 가장 먼저 만족하는 요소를 반환
{
  console.clear();
  // 이름이 "son" 인 객체 찾기
  {
      let userInfo;
      for (let user of users) {
          if (user.name == 'son') {
              userInfo = user
              break;
          }
      }
      console.log(userInfo)
  }
  {
      // let result = users.find( user =>{
      //     return user.name==="son"
      // })
      let result = users.find( el => el.name==="son")
      console.log(result);
  }
}

// map - 배열의 각 요소를 특정 형태로 매핑할 때 사용
{
  console.clear();

  // 나이 배열을 추출하고 싶은 경우
  let result =  users.map(value => {
    return value.age;
  })

  console.log(users)
  console.log(result)
}

// sort
{
  console.clear()
  let array = ['A', 'D', 'B', 'C' ];
  let result = array.sort()
  console.log(result)

  let result2 = users.sort((a, b) => {
    return a.age - b.age; // 나이순 오름차순
  });
  console.log(result2);


}