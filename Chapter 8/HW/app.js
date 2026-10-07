function calculateArea(width, height) {
  return width * height;
}

let width = 10;
let height = 5;
let area = calculateArea(width, height);

if (area > 100) {
  console.log("Area is greater than or equal to 100");
} else {
  console.log("The area is small.");
}