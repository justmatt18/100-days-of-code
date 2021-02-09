let arr = [true, 42, "Ada", "pizza"];

const swapTowardCenter = (arr) => {
  for (let index = 0; index < arr.length / 2; index++) {
    console.log(`my arr`, arr);
    var temp = arr[index];
    arr[index] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
    console.log(`New Arr ${arr}`);
  }
};

swapTowardCenter(arr);

for (var i = 0; i < arr.length / 2; i++) {
  var temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
