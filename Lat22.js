import { state } from "./state.js";
import { renderProducts } from "./ui.js";
import { fetchProducts } from "./api.js";

// Fungsi inisialisasi untuk memuat data secara asynchronous
async function init() {
    state.status = "loading";
    console.log("Sedang memuat data dari server...");

    // Mengambil data dari API
    const productsFromApi = await fetchProducts();
    
    // Simpan data ke dalam state aplikasi
    state.products = productsFromApi;
    state.status = "success";

    // Jalankan render pertama kali setelah data didapat
    render();
}

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

// Jalankan aplikasi
init();