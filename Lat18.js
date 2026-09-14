const state = {
    products: [
        { id: 1, title: "Laptop", category: "laptops", price: 1200, rating: 4.5, thumbnail: "https://picsum.photos/seed/laptop/200/150" },
        { id: 2, title: "Smartphone", category: "phones", price: 800, rating: 4.2, thumbnail: "https://picsum.photos/seed/phone/200/150" },
        { id: 3, title: "Headphones", category: "audio", price: 100, rating: 3.8, thumbnail: "https://picsum.photos/seed/audio/200/150" }
    ],
    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "success"
};


function render() {
    const container = document.querySelector("#product-list");
    container.innerHTML = ""; 

    // Filter data berdasarkan state (pencarian atau kategori)
    let filteredProducts = state.products.filter(product => {
        const matchesCategory = state.category === "all" || product.category === state.category;
        const matchesSearch = product.title.toLowerCase().includes(state.search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Jika produk kosong
    if (filteredProducts.length === 0) {
        container.innerHTML = "<p>Produk tidak ditemukan.</p>";
        return;
    }

    // Render produk ke DOM
    for (const product of filteredProducts) {
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

render();