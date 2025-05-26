class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  diagonal() {
    // 대각선 길이: √(width² + height²)
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }

}

class Area extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return this.area();
  }

  getDiagonal() {
    return this.diagonal();
  }

}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return 0.5 * this.width * this.height;
  }


}

let rec = new Area(3, 4);
console.log("면적:", rec.getArea());

console.log("대각선 길이:", rec.getDiagonal());

const tri = new Triangle(6, 7);
console.log("삼각형 넓이:", tri.getArea());
