const products = [
    { 
        id: 1, 
        title: "Laptop", 
        price: 1200, 
        category: "laptops", 
        stock: 5, 
        rating: 4.5, 
        tags: ["computer", "electronics", "office"] 
    },
    { 
        id: 2, 
        title: "Smartphone", 
        price: 800, 
        category: "phones", 
        stock: 15, 
        rating: 4.2, 
        tags: ["mobile", "electronics"] 
    },
    { 
        id: 3, 
        title: "Headphones", 
        price: 100, 
        category: "audio", 
        stock: 3, 
        rating: 3.8, 
        tags: ["audio", "accessories"] 
    },
    { 
        id: 4, 
        title: "Tablet", 
        price: 450, 
        category: "tablets", 
        stock: 8, 
        rating: 4.6, 
        tags: ["mobile", "electronics"] 
    },
    { 
        id: 5, 
        title: "Smartwatch", 
        price: 250, 
        category: "wearables", 
        stock: 12, 
        rating: 4.1, 
        tags: ["wearable", "electronics"] 
    }
];

function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}

const categoriesArray = products.map(p => p.category);
const categoryFrequency = countFrequency(categoriesArray);

const allTags = products.flatMap(p => p.tags);
const tagFrequency = countFrequency(allTags);

const roundedRatings = products.map(p => Math.round(p.rating));
const ratingFrequency = countFrequency(roundedRatings);

console.log("=== Frekuensi Kategori Produk ===");
console.log(categoryFrequency);

console.log("\n=== Frekuensi Seluruh Tags Produk ===");
console.log(tagFrequency);

console.log("\n=== Frekuensi Rating (Dibulatkan) ===");
console.log(ratingFrequency);