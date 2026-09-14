// Menghubungkan input search ke state
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
});

// Menghubungkan dropdown category ke state
const categorySelect = document.querySelector("#category-select");
categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
});

// Menghubungkan dropdown sort ke state (opsional tambahan)
const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
});