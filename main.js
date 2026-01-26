function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

const products = [
    new Product(1, "Laptop Dell XPS", 35000000, 10, "Laptop", true),
    new Product(2, "iPhone 15 Pro", 32000000, 5, "Phone", true),
    new Product(3, "Chuột Logitech", 500000, 0, "Accessories", true), // Hết hàng
    new Product(4, "Bàn phím cơ", 1500000, 20, "Accessories", true),
    new Product(5, "Tai nghe Sony", 2000000, 15, "Accessories", false), // Ngừng bán
    new Product(6, "Samsung S24", 28000000, 8, "Phone", true)
];

console.log("--- CÂU 2: Danh sách khởi tạo ---");
console.table(products);

const shortList = products.map(product => {
    return {
        name: product.name,
        price: product.price
    };
});

console.log("--- CÂU 3: Mảng Name và Price ---");
console.table(shortList);

const inStockProducts = products.filter(product => product.quantity > 0);

console.log("--- CÂU 4: Sản phẩm còn hàng ---");
console.table(inStockProducts);


const hasExpensiveProduct = products.some(product => product.price > 30000000);

console.log("--- CÂU 5: Kiểm tra giá > 30tr ---");
if (hasExpensiveProduct) {
    console.log("=> Kết quả: CÓ sản phẩm giá trên 30.000.000");
} else {
    console.log("=> Kết quả: KHÔNG CÓ sản phẩm nào giá trên 30.000.000");
}


console.log("--- CÂU 6: Kiểm tra danh mục Accessories ---");

const accessories = products.filter(p => p.category === 'Accessories');
const isAllAccessoriesAvailable = accessories.every(p => p.isAvailable === true);

console.log(`=> Kết quả: Tất cả phụ kiện đều đang bán là: ${isAllAccessoriesAvailable}`);


const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log("--- CÂU 7: Tổng giá trị kho ---");
console.log(
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalInventoryValue)
);


console.log("--- CÂU 8: Duyệt mảng (For...of) ---");
for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`>> ${product.name} - ${product.category} - ${status}`);
}


console.log("--- CÂU 9: Duyệt thuộc tính SP đầu tiên (For...in) ---");
const firstProduct = products[0];

for (const key in firstProduct) {
    console.log(`Key: ${key} -> Value: ${firstProduct[key]}`);
}


const activeProductNames = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log("--- CÂU 10: Tên SP đang bán & còn hàng ---");
console.log(activeProductNames);