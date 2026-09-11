const products = [
 {
 id: 1,
 title: "Laptop",
 price: 1200,
 rating: 4.5,
 stock: 10,
 category: "laptops",
 tags: ["computer", "electronics", "office"],
 dimensions: { width: 30, height: 2, depth: 20 },
 reviews: [
 { user: "A", rating: 5, comment: "Good product" },
 { user: "B", rating: 4, comment: "Worth it" }
 ]
 },
 {
 id: 2,
 title: "Smartphone",
 price: 800,
 rating: 4.2,
 stock: 15,
 category: "phones",
 tags: ["mobile", "electronics"],
 dimensions: { width: 7, height: 0.8, depth: 15 },
 reviews: [
 { user: "C", rating: 4, comment: "Nice camera" },
 { user: "D", rating: 5, comment: "Fast" },
 { user: "E", rating: 3, comment: "Battery so-so" }
 ]
 }
];

const laptopPrices = products
 .filter(p => p.category === "laptops")
 .map(p => p.price);
const avg = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;
console.log("Average price of laptops:", avg);

function getStatistics(products) {
    const totalProducts = products.length;

    if (totalProducts === 0) return null; // Mencegah error jika data kosong

    // Total Stock menggunakan reduce
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

    // Total Harga untuk menghitung rata-rata harga
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    const averagePrice = totalPrice / totalProducts;

    // Harga tertinggi dan terendah menggunakan spread operator dengan Math.max/min
    const prices = products.map(p => p.price);
    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);

    // Rata-rata rating (asumsi produk memiliki properti rating)
    const totalRating = products.reduce((sum, p) => sum + (p.rating || 0), 0);
    const averageRating = totalRating / totalProducts;

    // Mengembalikan hasil dalam bentuk objek
    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

console.log(getStatistics(products));