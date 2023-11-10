class Rectangle {
    constructor(length,width) {
        this.length = length;
        this.width = width;
    }

    perimeter() {
        return (this.length + this.width) * 2;
    }
    acreage() {
        return this.length * this.width;
    }
}

let inputLength = parseInt(prompt("Nhập chiều dài HCM vào đây: "));
let inputWidth = parseInt(prompt("Nhập chiều rộng HCM vào đây"));

let rectangle = new Rectangle(inputLength, inputWidth);
let myAcreage = rectangle.acreage();
let myPerimeter = rectangle.perimeter();

document.writeln("Hình chữ nhật có chiều dài " + inputLength  + " (cm) và chiều rộng là " + inputWidth +" (cm) " + "<br>");
document.writeln( "Có chu vi = " + myPerimeter + " (cm) và diện tích = " + myAcreage + " (cm²)" + "<br>");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle='#07ad14';
ctx.strokeRect(x, y, inputWidth, inputLength);
// ctx.fillRect(0, 0, inputWidth, inputLength)

