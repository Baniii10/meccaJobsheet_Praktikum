function generateLargeDataset(size) {
    const dataset = [];
    for (let i = 1; i <= size; i++) {
        dataset.push({
            id: i,
            title: `Product ${i}`,
            category: `category-${i % 20}`,
            price: Math.floor(Math.random() * 1000)
        });
    }
    return dataset;
}


function linearSearchWithSteps(arr, target) {
    let steps = 0;
    for (let i = 0; i < arr.length; i++) {
        steps++;
        if (arr[i] === target) {
            return { index: i, steps };
        }
    }
    return { index: -1, steps };
}

function binarySearchWithSteps(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let steps = 0;

    while (left <= right) {
        steps++;
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return { index: mid, steps };
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return { index: -1, steps };
}

const sortedNumbers = Array.from({ length: 10000 }, (_, index) => index + 1);
const targetValue = 8750; // Target yang dicari

console.log("=== Hasil Pencarian (10.000 Elemen) ===");
const linearResult = linearSearchWithSteps(sortedNumbers, targetValue);
console.log(`Linear Search - Index: ${linearResult.index}, Jumlah Langkah: ${linearResult.steps}`);

const binaryResult = binarySearchWithSteps(sortedNumbers, targetValue);
console.log(`Binary Search - Index: ${binaryResult.index}, Jumlah Langkah: ${binaryResult.steps}`);


const largeDataset = generateLargeDataset(1000); // 1000 produk

console.log("\n=== Hasil Pengelompokan (1.000 Produk) ===");

// Pendekatan A: Nested Loop O(n^2) - Mencari pasangan produk dengan kategori sama secara manual
const startNested = performance.now();
const nestedPairs = [];
for (let i = 0; i < largeDataset.length; i++) {
    for (let j = i + 1; j < largeDataset.length; j++) {
        if (largeDataset[i].category === largeDataset[j].category) {
            // Simulasi proses pencarian/pencocokan pasangan
        }
    }
}
const endNested = performance.now();
console.log(`Pendekatan A (Nested Loop O(n^2)) Waktu: ${(endNested - startNested).toFixed(4)} ms`);

// Pendekatan B: Map Grouping O(n) - Mengelompokkan berdasarkan kategori menggunakan Map
const startMap = performance.now();
const categoryMap = new Map();

for (const product of largeDataset) {
    if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, []);
    }
    categoryMap.get(product.category).push(product);
}
const endMap = performance.now();
console.log(`Pendekatan B (Map Grouping O(n)) Waktu: ${(endMap - startMap).toFixed(4)} ms`);