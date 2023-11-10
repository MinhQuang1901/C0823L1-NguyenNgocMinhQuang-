let totalBill = 0;
let orders = [];

function orderDrink(drinkNumber) {
    let quantity = prompt(`Nhập số lượng cho ${getDrinkName(drinkNumber)}:`);
    quantity = parseInt(quantity);

    if (isNaN(quantity) || quantity < 0) {
        alert("Số lượng không hợp lệ!");
    } else {
        let price = getDrinkPrice(drinkNumber);
        let subtotal = price * quantity;
        console.log(`Bạn đã đặt ${quantity} ${getDrinkName(drinkNumber)} - Giá: ${price} đồng/ly`);
        console.log(`Tổng tiền cho đơn hàng này: ${subtotal} đồng`);
        totalBill += subtotal;
        orders.push({ name: getDrinkName(drinkNumber), price: price, quantity: quantity, subtotal: subtotal });

        // Cập nhật hóa đơn khi có đơn hàng mới
        updateBill();
    }
}

function getDrinkPrice(drinkNumber) {
    switch (drinkNumber) {
        case 1:
            return 15000;
        case 2:
            return 20000;
        case 3:
            return 20000;
        case 4:
            return 20000;
        case 5:
            return 10000;
        case 6:
            return 25000;
        default:
            return 0;
    }
}

function getDrinkName(drinkNumber) {
    switch (drinkNumber) {
        case 1:
            return "Cafe";
        case 2:
            return "Cam vắt";
        case 3:
            return "Nước ép cà rốt";
        case 4:
            return "Nước ép cà chua";
        case 5:
            return "Nước lọc";
        case 6:
            return "Nước dừa";
        default:
            return "";
    }
}

function updateBill() {
    let billText = "Hóa đơn:<br>";
    for (let i = 0; i < orders.length; i++) {
        billText += `- ${orders[i].name} x${orders[i].quantity} - Giá: ${orders[i].price} đồng/ly <br>- Tổng: ${orders[i].subtotal} đồng<br>`;
    }
    billText += `Tổng cần thanh toán: ${totalBill} đồng`;

    // Đặt nội dung hóa đơn vào phần tử có id="root"
    document.getElementById("root").innerHTML = billText;
}