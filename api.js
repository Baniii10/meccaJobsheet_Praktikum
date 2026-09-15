// api.js - Mengambil data produk dari DummyJSON API
export async function fetchProducts() {
    try {
        // Melakukan request ke API DummyJSON (membatasi 30 produk)
        const response = await fetch("https://dummyjson.com/products?limit=30");
        
        if (!response.ok) {
            throw new Error(`Terjadi kesalahan HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        return data.products; // Mengembalikan array produk dari server
    } catch (error) {
        console.error("Gagal memuat data produk:", error);
        return []; // Kembalikan array kosong jika terjadi error
    }
}