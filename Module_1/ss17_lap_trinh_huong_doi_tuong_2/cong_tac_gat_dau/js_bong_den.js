class ElectricLamp {
    constructor() {
        this.status = false;
    }

    getStatus() {
        return this.status;
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }
}

class SwitchButton {
    constructor(lamp) {
        this.lamp = lamp;
    }

    connectToLamp(electricLamp) {
        this.lamp = electricLamp;
    }

    switchOff() {
        this.lamp.turnOff();
    }

    switchOn() {
        this.lamp.turnOn();
    }
}


let electricLamp = new ElectricLamp();
let switchButton = new SwitchButton(electricLamp);

let inputOnOffSwitch = parseInt(prompt("Nhập số lần bật/tắt công tắc"));

for(let i = 0; i < inputOnOffSwitch; i++){
    switchButton.switchOn();
    document.write("Bóng đèn hiện tại: " + (electricLamp.getStatus() ? "Bật" : "Tắt") + "<br>");

    switchButton.switchOff();
    document.write("Bóng đèn hiện tại: " + (electricLamp.getStatus() ? "Bật" : "Tắt") + "<br>");

}
