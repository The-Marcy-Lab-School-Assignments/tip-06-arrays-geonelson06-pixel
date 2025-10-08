//write your code here
const findMax = (numbers) => {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
console.log(findMax([5, 3, 8, 9, 15]));