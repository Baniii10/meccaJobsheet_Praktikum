import { state } from "./state.js";
import { renderProducts } from "./ui.js";

// Fungsi render utama yang menghubungkan state dan UI
function render() {
    let filteredProducts = state.products.filter(product => {
        const matchesCategory = state.category === "all" || product.category === state.category;
        const matchesSearch = product.title.toLowerCase().includes(state.search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    renderProducts(filteredProducts);
}

// Event Listener untuk Search Input
const searchInput = document.querySelector("#search-input");
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        state.search = e.target.value;
        render();
    });
}

// Render pertama kali saat aplikasi dibuka
render();