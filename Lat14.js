class Queue {
    constructor() {
        this.items = []; // Array internal untuk menyimpan elemen antrean
    }

    // Menambahkan elemen ke akhir antrean
    enqueue(item) {
        this.items.push(item);
    }

    // Mengeluarkan elemen dari bagian paling depan antrean
    dequeue() {
        return this.items.shift();
    }

    // Melihat elemen terdepan tanpa menghapusnya
    peek() {
        return this.items[0];
    }

    // Mengecek apakah antrean kosong
    isEmpty() {
        return this.items.length === 0;
    }
}

const requestQueue = new Queue();

console.log("=== SIMULASI ANTREAN PROSES (QUEUE) ===");

// 1. Memasukkan data ke antrean (Enqueue)
requestQueue.enqueue("Request Data Produk ID: 1");
requestQueue.enqueue("Request Data Produk ID: 2");
requestQueue.enqueue("Request Data Produk ID: 3");

// 2. Mengecek siapa yang berada di antrean paling depan (Peek)
console.log("Antrean terdepan saat ini:", requestQueue.peek()); 

// 3. Memproses antrean satu per satu (Dequeue - FIFO)
console.log("\nMemproses antrean:");
console.log("Selesai diproses:", requestQueue.dequeue()); 
console.log("Selesai diproses:", requestQueue.dequeue()); 

// 4. Mengecek antrean yang tersisa
console.log("\nSisa antrean terdepan berikutnya:", requestQueue.peek());