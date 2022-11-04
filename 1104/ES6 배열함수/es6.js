console.log("es6.js")

// Shorthand Property Names
{
  console.clear();

  //이미 만들어진 변수를 객체의 속성으로 활용하고 싶은 경우
  let name = "son";
  let age = 31;

  //ES5
  let userInfo = {
      "name" : name,
      age : age
  }
  console.log(userInfo)
  
  //ES6
  let userInfo2 = {
    name,
    age
  }
  console.log(userInfo2);
}

// 비 구조화 할당(Destructure Assignment)
{
  console.clear();

  {
    //객체 비구조화 할당
    const userInfo = {
      name: "son",
      job:"축구선수",
      age: 30,
      address: "춘천시",
    }
    {
      //ES5
      const name = userInfo.name;
      const age = userInfo["age"];
      console.log(name)
      console.log(age);
    }
    {
      //ES6
      // const { name, age } = userInfo;
      // console.log(name)
      // console.log(age)

      const { name, age:memeberAge, ...rest } = userInfo;
      console.log(name)
      console.log(memeberAge)
      console.log(rest)
    }
    console.clear();
    {
      //배열 비구조화 할당
      const userInfo = ["son",  30, "축구선수", "춘천시"];
      {
          //ES5
          const name = userInfo[0];
          const age = userInfo[1];
      }
      {
          //ES6
          // const [name, age] = userInfo;
          // console.log(name);
          // console.log(age);

          const [name, age, ...rest] = userInfo;
          console.log(name);
          console.log(age);
          console.log(rest);
      }
    }
  }
}

//Spread Syntax
{
  //객체에서 사용
  {
    console.clear();
    const userInfo = {
      name: "son",
      age: 30,
    }

    {
      const newUserInfo = {
        ...userInfo,
        gender: "male",
        // age: 29, => 얘로 대체 된다.
      }
      console.log(newUserInfo);
    }
  }
  //배열에서 사용
  {
    console.clear();
    const userInfo = ["son", 31];

    //userInfo 요소를 포함한 새로운 배열 만들기
    {
        let newUserInfo = [...userInfo, 'male']; 
        console.log(newUserInfo)
    }
    //배열 끼리 합치기
    {
        let addUserInfo = ["male", "london"];
        let newUserInfo = [...userInfo, ...addUserInfo]
        console.log(newUserInfo)
    }
  }
}

// Template Literals
{
  console.clear();
  let name = "son";
  const age = 31;

  //<이름>은(는) <나이> 살
  console.log(name + "은(는) " + age + " 살");

  // ES6 
  // 백틱안에서 변수는 ${}
  let str = `${name}은(는) ${age} 살`
  console.log(str);

  name = "hello"
  console.log(str)
  // => 만들어진 순간에 변수의 값으로 문자열을 만들기 때문에 바뀌지 않음
}

// Default Parameter
{
  console.clear();
  function hello(name, age){
    console.log(`${name}은(는) ${age} 살`);
  }
  hello();

  //ES5
  function hello2(name, age){
      if(name== null) name="son"
      if(age==null) age=31
      console.log(`${name}은(는) ${age} 살`);
  }
  hello2();

  //ES6
  function hello3(name = "how", age = 50) {
    console.log(`${name}은(는) ${age} 살`);
  }
  // hello3();
  hello3("hello"); // 나이값만 넣고 싶은 경우
}

// 삼항 연산자도 ES6 문법이다!

//Consise Method 간결한 메소드
{
  console.clear();
  //ES5
  {
      let obj = {
          hello:function(){
              console.log("obj의 hello() 실행")
          }
      }
      obj.hello();
  }
  //ES6
  {
      let obj = {
          hello () {
              console.log("obj의 hello() 실행")
          }
      }
      obj.hello();
  }
}

//Arrow Function
{
  console.clear();
  //ES5
  {
      let hello = function () {
          console.log("son은 30 살")
      }
      hello();
  }
  //ES6
  {
      {
          console.clear();
  
          let hello = () => {
              console.log("son은 30 살")
          }
          hello();
      }
      {
          //블록 내의 코드가 한 문장일 경우
          let hello = () => console.log("son은 30 살");
          hello();
      }
      {
          //매개변수 하나일 경우 () 괄호 생략 가능
          let hello = name=> console.log( `${name}은(는) 30 살`)
          hello("son");
      }
      {
          //값을 반환하는 함수의 경우
          let hello = (name, age)=>  {
              return `${name}은(는) ${age} 살`
          }
          console.log( hello("son", 30) );
      }
      {
          //return 문 하나만 사용해야할 경우 생략 가능
          let hello = (name, age)=> `${name}은(는) ${age} 살`
          console.log( hello("son", 30) );
      }
  }
}

// ES6는 클래스 지원해줌
// Class
{
  console.clear();
  class Person{
    constructor(name) {
      this.name = name
    }

    eat() {
      console.log(this.name + "가 먹는다.")
    }
  }
  let person = new Person("son");
  console.log(person)
  person.eat();

  class Student extends Person{
    constructor(name, number){
        super(name);
        this.number = number;
    }

    introduce(){
        console.log(`제 이름은 ${this.name}이고 학번은 ${this.number}입니다.`)
    }
  }

  let student = new Student("son", "3333");
  console.log(student);
  student.introduce();
}

// Rest Parameter
{
  console.clear();

  function test(one, ...rest) {
    console.log(one);
    console.log(rest);
  }

  test(1, 2, 3, 4, 5, 6);
}

// for of
{
  console.clear();

  let arr = [
    10,11,12,13,14,15
  ]

  for (const val of arr) {
    console.log(val)  // 값
    // return; // 이 for문을 끝냄
  }
  arr.forEach((value, index, array) => {
    
    if (value > 0) return;  // 익명 함수를 끝냄
  })

  for (const val in arr) {
    console.log(val)  // 인덱스
  }
}