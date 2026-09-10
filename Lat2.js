const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
    { id: 4, title: "Tablet", price: 450, category: "tablets", stock: 8 },
    { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 12 },
    { id: 6, title: "Gaming Monitor", price: 350, category: "monitors", stock: 7 },
    { id: 7, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 20 },
    { id: 8, title: "Wireless Mouse", price: 45, category: "accessories", stock: 25 },
    { id: 9, title: "External SSD 1TB", price: 120, category: "storage", stock: 10 },
    { id: 10, title: "Bluetooth Speaker", price: 80, category: "audio", stock: 14 },
    { id: 11, title: "DSLR Camera", price: 950, category: "cameras", stock: 4 },
    { id: 12, title: "Action Camera", price: 300, category: "cameras", stock: 9 },
    { id: 13, title: "Power Bank 20000mAh", price: 60, category: "accessories", stock: 30 },
    { id: 14, title: "USB-C Hub", price: 35, category: "accessories", stock: 18 },
    { id: 15, title: "LED Desk Lamp", price: 40, category: "home", stock: 11 },
    { id: 16, title: "Coffee Maker", price: 150, category: "home", stock: 6 },
    { id: 17, title: "Electric Kettle", price: 50, category: "home", stock: 13 },
    { id: 18, title: "Fitness Tracker", price: 70, category: "wearables", stock: 16 },
    { id: 19, title: "Graphics Card", price: 700, category: "computer-parts", stock: 2 },
    { id: 20, title: "RAM 16GB", price: 85, category: "computer-parts", stock: 22 },
    { id: 21, title: "Processor i7", price: 380, category: "computer-parts", stock: 5 },
    { id: 22, title: "Motherboard", price: 200, category: "computer-parts", stock: 7 },
    { id: 23, title: "PC Case", price: 90, category: "computer-parts", stock: 10 },
    { id: 24, title: "Microphone Condenser", price: 110, category: "audio", stock: 8 },
    { id: 25, title: "Webcam 1080p", price: 65, category: "accessories", stock: 15 },
    { id: 26, title: "Router WiFi 6", price: 130, category: "networking", stock: 9 },
    { id: 27, title: "Network Switch", price: 55, category: "networking", stock: 12 },
    { id: 28, title: "VR Headset", price: 500, category: "gaming", stock: 4 },
    { id: 29, title: "Gaming Chair", price: 280, category: "furniture", stock: 6 },
    { id: 30, title: "Standing Desk", price: 400, category: "furniture", stock: 3 }
];

function findProductById(products, id) {
    return products.find(p => p.id === id);
}

// Contoh pencarian produk dengan id 5 (Smartwatch)
const hasilPencarian = findProductById(products, 5);
console.log(hasilPencarian); 

// Contoh jika ID tidak ditemukan
const tidakAda = findProductById(products, 100);
console.log(tidakAda); 

function getLowStockProducts(products) {
    return products.filter(p => p.stock < 10);
}

// Contoh penggunaan fungsi getLowStockProducts
const lowStock = products.filter(p => p.stock < 10);
console.log(lowStock);

function updateStock(products, id, newStock) {
 return products.map(p =>
 p.id === id ? { ...p, stock: newStock } : p
 );
}

const updatedProducts = updateStock(products, 3, 15);
console.log(updatedProducts.find(p => p.id === 3));