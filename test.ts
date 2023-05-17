// * 스트링으로 구성된 배열이란 뜻 string[]
// * 매개변수를 배열로 받을 예정
// * typeof(arrayData) === string
function first(arrayData : string[]) : string[] {
  // 1. 첫번째 인덱스의 값을 반환하는 함수를 만들고 싶다.
  let result : string = "강지민";
  let arr : string[] = [];
  // * 기존 배열에 0번재를 최종적으로 바꿔주는 형태
  // * ...전개연산자
  // * reduce()
  // * map()
  // * push() pop()
  arrayData.splice(0, 1, result);
  // unshift = 배열의 앞에 넣겠다.
  arr.unshift(result);
  return arr;
}

let data = ["최대건", "정성철", "허진", "이세민"];
console.log(first(data));
console.log(data);