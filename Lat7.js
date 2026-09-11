const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
    { id: 4, title: "Tablet", price: 450, category: "tablets", stock: 8 },
    { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 12 },
    { id: 6, title: "Gaming Monitor", price: 350, category: "monitors", stock: 7 },
    { id: 7, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 20 },
    { id: 8, title: "Wireless Mouse", price: 45, category: "accessories", stock: 25 },
    { id: 9, title: "External SSD 1TB", price: 120, category: "storage", stock: 10 }
];

function binarySearchByPrice(arr, targetPrice) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currentPrice = arr[mid].price; // Ambil nilai harganya saja
        
        if (currentPrice === targetPrice) return mid; // Mengembalikan indeks
        if (currentPrice < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// 1. Urutkan produk berdasarkan price terlebih dahulu (Wajib untuk binary search)
const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log("Sorted products by price:", sortedProducts);

// 2. Uji coba pencarian harga (misal mencari produk dengan harga 450, yaitu Tablet)
const indexHasil = binarySearchByPrice(sortedProducts, 450);
console.log("Indeks produk ditemukan pada:", indexHasil);
console.log("Detail produk:", sortedProducts[indexHasil]);