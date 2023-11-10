class Mobile {
    constructor () {
        this.battery = 100;
        this.powerOn = false;
        this.draftMessages = [];
        this.inbox = [];
        this.senMessages = [];
    }

    checkPowerStatus() {
        return this.powerOn;
    }

    powerOnMobile() {
        if (!this.powerOn) {
            this.powerOn = true;
            alert("Điện thoại đã được bật");
            this.battery -= 1;
        } else {
            alert("Điện thoại đã ở trạng thái bật.");
        }
    }

    powerOffMobile() {
        if(this.powerOn) {
            this.powerOn = false;
            alert("Điện thoại đã được tắt.");
        } else {
            alert("Điện thoại đã ở trạng thái tắt.");
        }
    }

    chargeBattery() {
        if (this.battery < 100) {
            this.battery = 100;
            alert("Điện thoại đã được sạc đầy.");
        } else {
            alert("Pin điện thoại đã đầy.");
        }
    }

    composeMessage(message) {
        if (this.powerOn) {
            this.draftMessages.push(message);
            this.battery -=1;
            alert("Tin nhắn đã được soạn.");
        }  else {
            alert("Điện thoại đang tắt, không thể soạn tin nhắn.");
        }
    }

    receiveMessage(message) {
        if (this.powerOn) {
            this.inbox.push(message);
            this.battery -= 1;
            alert("Đã nhận tin nhắn mới.");
        } else {
            alert("Điện thoại đang tắt, không thể nhận tin nhắn");
        }
    }

    sendMessage(message, recipientMobile) {
        if (this.powerOn) {
            recipientMobile.receiveMessage(message);
            this.senMessages.push(message);
            this.battery -=1;
            alert("Tin nhăn đã được gửi.");
        } else {
            alert("Điện thoại đang tắt, không thể gửi tin nhắn. ");
        }
    }

    viewInbox() {
        if (this.powerOn) {
            alert("Hộp thư đến: ");
            this.inbox.forEach((message,index) => {
                alert(`Tin ${index + 1}: ${message}`);
            });
        } else {
            alert("Điện thoại đang tắt, không thể xem hộp thư đến.");
        }
    }

    viewSentMessage() {
        if (this.powerOn) {
            alert("Tin nhắn đang gửi");
            this.senMessages.forEach((message,index) => {
                alert(`Tin ${index + 1}: ${message}`);
            });
        } else {
            alert("Điện thoại đang tắt, không thể xem tin nhắn đã gửi. ");
        }
    }
}

let mobile1 = new Mobile();
let mobile2 = new Mobile();

mobile1.powerOnMobile();
mobile1.composeMessage("Xin chào!");
mobile1.sendMessage("Chào bạn!", mobile2);

mobile2.powerOnMobile();
mobile2.receiveMessage("Xin chào!");

mobile1.viewInbox();
mobile2.viewInbox();









