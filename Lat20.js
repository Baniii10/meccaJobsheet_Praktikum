// Fungsi getStatistics yang di-refactor menggunakan ES6+ (Destructuring & Optional Chaining)
function getStatistics(products) {
    const totalProducts = products.length;
    
    // Jika produk kosong, kembalikan nilai default 0
    if (totalProducts === 0) {
        return { totalProducts: 0, averagePrice: 0, highestPrice: 0, lowestPrice: 0, totalStock: 0, averageRating: 0 };
    }

    const prices = products.map(p => p.price);
    const stocks = products.map(p => p.stock);
    
    // Menggunakan optional chaining jika ada data rating yang diakses dari objek bersarang
    const ratings = products.map(p => p.rating ?? 0);

    const totalStock = stocks.reduce((sum, stock) => sum + stock, 0);
    const totalPrice = prices.reduce((sum, price) => sum + price, 0);
    const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);

    return {
        totalProducts,
        averagePrice: (totalPrice / totalProducts).toFixed(2),
        highestPrice: Math.max(...prices), // Menggunakan spread operator
        lowestPrice: Math.min(...prices),   // Menggunakan spread operator
        totalStock,
        averageRating: (totalRating / totalProducts).toFixed(2)
    };
}

// Contoh Penggunaan dengan Destructuring saat memanggil fungsi
const stats = getStatistics(products);
const { totalProducts, averagePrice, totalStock } = stats;

console.log(`Total Produk: ${totalProducts}, Rata-rata Harga: $${averagePrice}, Total Stok: ${totalStock}`);