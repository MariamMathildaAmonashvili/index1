function myArray(a, b) {
  if (a.length > b.length) {
    return "a has more elements than b";
  } else {
    return "b has more elements than a";
  }
}
//console.log(myArray([10, 20, "Sun", "Clouds"], [30, 40, "Moon"]));
let array = [30, 5, 6];
function arraySort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] < data[j]) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  console.log(data);
}
arraySort(array);
არგუმენტი ამ რიგით (array , value , array1 , valur1) 2 მასივი შექმენით 7 ელემენტიანი სტრინგებით
ამოირჩიეთ ნებისმიერი ელემენტი ამ ორივე მასივიდან 1 1 და გადაეცით ფუნქციას და ფუნქციამ უნდა გაიგოს
ეს მნიშვნელობა რომელ ადგილზეა მერე ინდექსები შეადაროს ერთმანეთის და რომლის ინდექსიც მეტი იქნება 
იმის მნიშვნელობა გამოიტანოს
let firstArray = ["Blue", "Sky", "Sunny", "Day"];
let secondArray = ["Mariam", "Mathilda", "Amonashvili", "Green"];
function myArray(array, value, array1, value1) {
  let index1;
  let index;
  // let index = array[i];
  for (let i = 0; i < firstArray.length; i++) {
    if (array[i] === value) {
      index = i;
    }
  }
  for (let j = 0; j < secondArray.length; j++) {
    if (array1[j] === value1) {
      index1 = j;
    }
  }
  if (index > index1) {
    console.log(firstArray[1]);
  } else {
    console.log(secondArray[3]);
  }
}
myArray(firstArray, firstArray[1], secondArray, secondArray[3]);
