let names  = ["Laptop", "Điện thoại", "Tai nghe", "Bàn phím", "Chuột"];
        let prices = [1500, 800, 200, 120, 90];
        let stocks = [5, 0, 12, 7, 20];

        while (true) {
            let choice = prompt(
                "===== QUẢN LÝ KHO HÀNG =====\n" +
                "1. Lọc sản phẩm cao cấp (>500)\n" +
                "2. Kiểm định trạng thái dữ liệu\n" +
                "3. Phân tích giá trị vốn hóa\n" +
                "4. Giảm giá 10%\n" +
                "5. Tìm kiếm theo từ khóa\n" +
                "6. Báo cáo tồn kho\n" +
                "7. Thoát\n\n" +
                "Nhập lựa chọn:"
            );
            if (choice === null) break;
            switch (choice) {
                case "1":
                    let premium = names.filter((name, index) => prices[index] > 500);

                    alert(
                        premium.length > 0
                        ? "Sản phẩm cao cấp:\n" + premium.join("\n")
                        : "Không có sản phẩm cao cấp."
                    );
                    break;
                case "2":
                    let hasOutOfStock = stocks.some(stock => stock === 0);
                    let allAbove100 = prices.every(price => price > 100);

                    alert(
                        "Có sản phẩm hết hàng? " + (hasOutOfStock ? "Có" : "Không") + "\n" +
                        "Tất cả sản phẩm giá > 100? " + (allAbove100 ? "Có" : "Không")
                    );
                    break;
                case "3":
                    let total = prices.reduce((sum, price, index) => 
                        sum + price * stocks[index]
                    , 0);

                    alert("Tổng giá trị kho: $" + total);
                    break;
                case "4":
                    prices = prices.map(price => +(price * 0.9).toFixed(2));
                    alert("Đã giảm 10% giá toàn bộ sản phẩm.");
                    break;
                case "5":
                    let keyword = prompt("Nhập từ khóa:");
                    if (!keyword) break;
                    keyword = keyword.toLowerCase()
                    let results = names
                        .map((name, index) => ({
                            name: name,
                            price: prices[index],
                            stock: stocks[index]
                        }))
                        .filter(product =>
                            product.name.toLowerCase().includes(keyword)
                        )
                        .map(product =>
                            `${product.name} - Giá: $${product.price} - SL: ${product.stock}`
                        );

                    alert(
                        results.length > 0
                        ? "Kết quả tìm kiếm:\n" + results.join("\n")
                        : "Không tìm thấy sản phẩm."
                    );
                    break;
                case "6":
                    let report = names.map((name, index) =>
                        `${name} - ${stocks[index] > 0 ? "Còn hàng" : "Hết hàng"}`
                    );
                    alert("Báo cáo tồn kho:\n" + report.join("\n"));
                    break;
                case "7":
                    alert("Kết thúc chương trình.");
                    break;

                default:
                    alert("Lựa chọn không hợp lệ!");
                    continue;
            }
            if (choice === "7") break;
        }