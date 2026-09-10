const cart = [
 { title: "Laptop", price: 1000, discountPercent: 10 },
 { title: "Mouse", price: 20, discountPercent: 5 },
 { title: "Keyboard", price: 50, discountPercent: 0 }
];

function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

function applyDiscounts(cart) {
    const result = [];
    for (const item of cart) {
        // Menghitung harga setelah diskon untuk setiap item
        const discountedPrice = item.price - (item.price * item.discountPercent) / 100;

        // Menyimpan hasilnya ke array result (bisa membuat objek baru)
        result.push({
            title: item.title,
            price: item.price,
            discountPercent: item.discountPercent,
            finalPrice: discountedPrice
        });
    }
    return result;
}

// Contoh pemanggilan fungsi:
console.log(applyDiscounts(cart));