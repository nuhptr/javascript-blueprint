/**
 * Destructuring adalah fitur ES6+ untuk membongkar nilai dari array atau properti
 * dari object ke dalam variabel terpisah secara ringkas dan deklaratif.
 *
 * File ini berfungsi sebagai entry utama folder `destructuring/` yang menjalankan
 * seluruh sub-topik destructuring secara berurutan. Setiap sub-file juga dapat
 * dijalankan secara terpisah menggunakan Node.js atau Bun.
 *
 * Daftar sub-topik:
 * 1. array-destructuring.js    - Membongkar elemen array berdasarkan indeks.
 * 2. object-destructuring.js   - Membongkar properti object berdasarkan key.
 * 3. rename-destructuring.js   - Memberi alias pada properti saat destructuring.
 * 4. function-destructuring.js - Destructuring langsung pada parameter fungsi.
 * 5. nested-destructuring.js   - Destructuring pada struktur data bertingkat.
 * 6. destructuring-mixture.js  - Latihan gabungan seluruh jenis destructuring.
 */

/**
 * Menjalankan satu modul topik destructuring dengan header pemisah agar output
 * mudah dibaca di terminal.
 *
 * @param {string} title Judul sub-topik yang ditampilkan.
 * @param {string} modulePath Path relatif ke file sub-topik.
 * @returns {void}
 */
function runTopic(title, modulePath) {
    console.log(`\n=== ${title} ===`)
    require(modulePath)
}

runTopic("1. Array Destructuring", "./array-destructuring")
runTopic("2. Object Destructuring", "./object-destructuring")
runTopic("3. Rename Destructuring", "./rename-destructuring")
runTopic("4. Function Destructuring", "./function-destructuring")
runTopic("5. Nested Destructuring", "./nested-destructuring")
runTopic("6. Destructuring Mixture Practice", "./destructuring-mixture")
