const products = [
    { 
        id: 1, 
        title: "Laptop", 
        category: "laptops", 
        price: 1200, 
        rating: 4.5, 
        thumbnail: "https://pics.photos/seed/laptop/200/150" 
    },
    { 
        id: 2, 
        title: "Smartphone", 
        category: "phones", 
        price: 800, 
        rating: 4.2, 
        thumbnail: "https://picsum.photos/seed/phone/200/150" 
    },
    { 
        id: 3, 
        title: "Headphones", 
        category: "audio", 
        price: 100, 
        rating: 3.8, 
        thumbnail: "https://picsum.photos/seed/audio/200/150" 
    },
    { 
        id: 4, 
        title: "Tablet", 
        category: "tablets", 
        price: 450, 
        rating: 4.6, 
        thumbnail: "https://picsum.photos/seed/tablet/200/150" 
    },
    { 
        id: 5, 
        title: "Smartwatch", 
        category: "wearables", 
        price: 250, 
        rating: 4.1, 
        thumbnail: "https://picsum.photos/seed/watch/200/150" 
    }
];

// Fungsi renderProducts dari modul praktikum Bagian 17
function renderProducts(productsArray) {
    const container = document.querySelector("#product-list");
    container.innerHTML = ""; 
    
    for (const product of productsArray) {
        const card = document.createElement("div");
        card.classList.add("product-card");
        
        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Kategori: ${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;
        
        container.append(card);
    }
}

renderProducts(products);