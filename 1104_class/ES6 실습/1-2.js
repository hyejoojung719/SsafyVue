
// 1번
let name = "Kim";
let birthday = "2000.01.01";
let job = "Student";

let info = `내 이름은 ${name}이고, ${birthday}에 태어 났습니다. 제 직업은 ${job}입니다.`;
console.log(info)

//2번
const Movie = {
  title: "기생충",
  director: "봉준호",
  genre: "드라마",
  runningTime: 132,
}

console.log(Movie.title);
console.log(Movie.director);
console.log(Movie.genre);
console.log(Movie.runningTime);

// 3번
// movies 배열에서 "스"가 들어간 요소를 출력하시오. filter

Movies = ["기생충", "이터널스", "킹스맨", "스파이더맨", "해리포터"];
// Movies.filter((value) => {
//   if(value.includes("스")) console.log(value)
// })

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++){
    callback(array[i], i, array);
  }
}
forEach(Movies, (value) => console.log(value))

// 4번
// 인자 숫자 1개를 받아 세제곱을 반환하는 함수 => 화살표 함수로 바꾸기
let result = (el) => Math.pow(el, 3)
console.log(result(3))

// 5번 Array Helper Methods 중 map을 메서드를 이용하여 임의의 정수를 가진 배열의 요소를
// 2배씩 하여 새로운 배열 생성
arr = [2, 3, 4]
// arr2 = [[1, 4, 5], [2, 4, 3], [3, 6, 7]]

// arr2를 map 메서드를 이용하여 첫 요소들을 2배씩 하여 새로운 배열 생성
// let result3 = arr2.map((value) => {
//   return value[0]*2
// })
// console.log(result3)

let result2 = arr.map((num) => {
  return num * 2
});
console.log(result2);