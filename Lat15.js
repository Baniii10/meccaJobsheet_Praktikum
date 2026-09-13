const categories = [
    {
        name: "Electronics",
        children: [
            { 
                name: "Laptop", 
                children: [
                    { name: "Gaming Laptop", children: [] },
                    { name: "Ultrabook", children: [] }
                ] 
            },
            { name: "Phone", children: [] }
        ]
    },
    {
        name: "Clothing",
        children: [
            { name: "Men", children: [] },
            { name: "Women", children: [] }
        ]
    }
];

function printCategories(categories, depth = 0) {
    for (const category of categories) {
        // Menampilkan nama kategori dengan indentasi berdasarkan kedalaman (depth)
        console.log("  ".repeat(depth) + `- ${category.name}`);
        
        // Jika memiliki anak/sub-kategori, panggil fungsi ini kembali (rekursi)
        if (category.children && category.children.length > 0) {
            printCategories(category.children, depth + 1);
        }
    }
}

printCategories(categories);