const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 5,
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
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        rating: 3.8,
        stock: 3,
        category: "audio",
        tags: ["audio", "accessories"],
        dimensions: { width: 15, height: 5, depth: 10 },
        reviews: [
            { user: "F", rating: 4, comment: "Clear sound" }
        ]
    },
    {
        id: 4,
        title: "Tablet",
        price: 450,
        rating: 4.6,
        stock: 8,
        category: "tablets",
        tags: ["mobile", "electronics", "office"],
        dimensions: { width: 20, height: 1, depth: 12 },
        reviews: [
            { user: "G", rating: 5, comment: "Very handy" }
        ]
    },
    {
        id: 5,
        title: "Smartwatch",
        price: 250,
        rating: 4.1,
        stock: 12,
        category: "wearables",
        tags: ["wearable", "electronics"],
        dimensions: { width: 4, height: 1, depth: 4 },
        reviews: [
            { user: "H", rating: 4, comment: "Cool design" }
        ]
    },
    {
        id: 6,
        title: "Gaming Monitor",
        price: 350,
        rating: 4.7,
        stock: 7,
        category: "monitors",
        tags: ["computer", "gaming"],
        dimensions: { width: 50, height: 30, depth: 15 },
        reviews: [
            { user: "I", rating: 5, comment: "Smooth 144Hz" }
        ]
    },
    {
        id: 7,
        title: "Mechanical Keyboard",
        price: 90,
        rating: 4.8,
        stock: 20,
        category: "accessories",
        tags: ["computer", "gaming", "office"],
        dimensions: { width: 40, height: 3, depth: 13 },
        reviews: [
            { user: "J", rating: 5, comment: "Satisfying click" }
        ]
    },
    {
        id: 8,
        title: "Wireless Mouse",
        price: 45,
        rating: 4.4,
        stock: 25,
        category: "accessories",
        tags: ["computer", "accessories"],
        dimensions: { width: 6, height: 3, depth: 10 },
        reviews: [
            { user: "K", rating: 4, comment: "Ergonomic" }
        ]
    },
    {
        id: 9,
        title: "External SSD 1TB",
        price: 120,
        rating: 4.9,
        stock: 10,
        category: "storage",
        tags: ["computer", "storage"],
        dimensions: { width: 10, height: 1, depth: 5 },
        reviews: [
            { user: "L", rating: 5, comment: "Super fast transfer" }
        ]
    }
];

function buildProductLookup(products) {
    const productMap = new Map();

    for (const product of products) {
        // Menyimpan id sebagai key dan seluruh objek product sebagai value
        productMap.set(product.id, product);
    }

    return productMap;
}

console.log("=== Product Lookup Map ===");
const productLookup = buildProductLookup(products);
console.log(productLookup);