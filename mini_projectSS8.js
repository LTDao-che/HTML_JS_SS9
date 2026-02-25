let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];
function checkCash() {
    let negative = revenues.some(check => check < 0 );
    let moreThan = revenues.every(check => check < 500 );
        console.log(`Có đơn hàng âm: ${negative}`);
        console.log(`Tất cả trên 500: ${moreThan}`);
}

function profits() {
    const netProfits = revenues.map(element => element * 0.9);
    console.log(netProfits);
}
checkCash();
profits();
