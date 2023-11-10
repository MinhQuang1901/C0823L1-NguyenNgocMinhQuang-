class Apple {
    constructor(_weigth) {
        this._weight = weigth;
    }

    getWeight() {
        return this._weight;
    }

    decreaseWeight() {
        if (this._weight >0){
            this._weight--;
        }
    }
}

class Hunman {
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale(gender){
        if (gender === 1){
            return this.gender = "Male";
        } else if (gender === 2){
            return this.gender = "Female";
        }
    }

    setGender(){
        return this.gender;
    }

    getWeight (){
        return this.weight;
    }

    say(sentence){
        console.log(this.name + "say: " + sentence);
    }

    eat(apple){
        if(apple.getWeight() > 0){
            this.weight++
            apple.decreaseWeight()
        } else {
            console.log("Cannot eat. The apple is out of stock");
        }
    }

    checkAppleWeight(apply){
        console.log("Apple's weight: " + this.getWeight());
    }

}
let inputApple = parseInt(prompt("Enter apple number here: "));
let apple = new Apple(inputApple);
let Adam = new Hunman("a fắck king dam",1,80);
let Eva = new Hunman("E fắck king va",2,45);

Adam.say("I'm a Adam " + "<br>");
Eva.say("I'm a Eva" + "<br>");

while (apple.getWeight() > 0) {
    document.write("Adam ăn táo" + "<br>");
    Adam.eat(apple);
    document.write("Quả táo còn: " + apple.getWeight() + " đơn vị <br>");
    document.write("Cân nặng của Adam là: " + Adam.getWeight() + " kg <br>");

    document.write("<br>");

    document.write("Eva ăn táo" + "<br>");
    Eva.eat(apple);
    document.write("Quả táo còn: " + apple.getWeight() + " đơn vị <br>");
    document.write("Cân nặng của Eva là: " + Eva.getWeight() + " kg <br>");

    document.write("<br>")
}
document.write("Hết táo rồi :v");





