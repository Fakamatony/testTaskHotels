//1 Задание 10минут
function city(arr) {
  return arr.join(", ") + ".";
}
console.log(city(["Самара", "Тольятти", "Кинель", "Horno-city"]));

//2 задание 1 час
function roundNumb(numb) {
  let convert = numb % 5;
  if (convert === 0) {
    return numb;
  } else if (convert >= 2.5) {
    return (numb-convert+5);
  } else {
    if (convert < 2.5){
      return (numb-convert)}
  }
}
console.log(roundNumb(36));

//3 задание 2 часа
function naming(int) {
  let myNum = String(int);
  let myNumArr = [];
  for (let i = 0; i < myNum.length; i++) {
    myNumArr.push(myNum.charAt(i));
  }
  
  let endPosition = myNumArr[myNumArr.length - 1];
  let penultPosition = myNumArr[myNumArr.length - 2];
  
  if ((endPosition >= 5 && endPosition <= 9) || (endPosition === "0") ||
    (endPosition == 1 && penultPosition == 1) ||
    (endPosition >= 2 && endPosition <= 4 && penultPosition == 1)
  ) {
    console.log(`${int} компьютеров`);
  }
  
  if (endPosition == 1 && penultPosition != 1) {
    console.log(`${int} компьютер`)
  }
  
  if (endPosition >= 2 && endPosition <= 4 && penultPosition != 1) {
    console.log(`${int} компьютера`)
  }
  
}
naming(12);

//4 задание 2-3 часа
function iSItAPrimeNumber(numb) {
  let count = 0;
  for (let i=2; i<=numb-1; i++){
    
    let split = numb % i;
    if (split === 0) {
      count = count +1;
    }}
  
  
  if  (count === 0){console.log(`${numb} является простым числом`)
  } else {
    console.log(`${numb} не является простым числом`)
  }
  
}

iSItAPrimeNumber(4);
//5 задание
const input1 = [1,5,14,4,2,9,0,88];
const input2 = [13,6,14,44,88];
let intersect = function (nums1, nums2) {
  let result = [];
  
  let map = nums1.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});
  
  for (let i = 0; i < nums2.length; i++) {
    let current = nums2[i];
    let currentMapItem = map[current];
    
    if (currentMapItem && currentMapItem > 0) {
      result.push(current);
      map[current] = currentMapItem - 1;
    }
  }
  
  return result;
};
console.log(intersect(input1,input2))
//6 задание (Получилось кривовато, из-за спешки) 3 часа

function multiplicationTable(maxValue) {
  let table = "";
  
  for (let i = 1; i <= maxValue; i++) {
    let tableLine = "";
    for (let j = 1; j <= maxValue; j++) {
      tableLine += ""+(i*j)+" ";
    }
    
    tableLine += "\n";
    table += tableLine;
  }
  
  return table;
}

console.log(multiplicationTable(10))

