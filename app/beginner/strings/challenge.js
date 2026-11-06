/**
 * String adalah teks, seperti nama.
 * Teks ditulis di antara tanda kutip.
 */
const firstName = "anmastery"
const lastName = "developer"

/**
 * 1. Menggabungkan teks
 * Tanda + menyatukan dua teks. Tambahkan " " supaya ada spasi di antara nama.
 */
const fullName = firstName + " " + lastName
console.log(fullName) // anmastery developer

/**
 * 2. Menambahkan teks
 * += menambahkan teks baru ke akhir nilai yang sudah ada.
 */
let greeting = "Halo"
greeting += ", " + firstName + "!"
console.log(greeting) // Halo, anmastery!

/**
 * 3. Menghitung karakter
 * length memberi tahu jumlah karakter, termasuk spasi.
 */
console.log(fullName.length) // 11

/**
 * 4. Mengubah huruf
 * toUpperCase() membuat semua huruf besar.
 * toLowerCase() membuat semua huruf kecil.
 */
console.log(firstName.toUpperCase()) // ANMASTERY
console.log(firstName.toLowerCase()) // anmastery

/**
 * 5. Mengambil sebagian teks
 * slice(0, 4) mengambil karakter mulai dari posisi 0 sampai sebelum posisi 4.
 */
console.log(firstName.slice(0, 4)) // anmas

/**
 * 6. Memisahkan dan menggabungkan karakter
 * split("") memisahkan teks menjadi karakter-karakter.
 * join("-") menggabungkannya kembali dengan tanda - di antaranya.
 */
console.log(firstName.split("").join("-")) // a-n-m-a-s-t-e-r-y

/**
 * 7. Memeriksa isi teks
 * includes() menghasilkan true jika teks yang dicari ditemukan.
 */
console.log(fullName.includes("anmastery")) // true

/**
 * 8. Menghapus spasi di awal dan akhir
 * trim() menghapus spasi di pinggir teks, bukan spasi di tengah.
 */
const paddedName = "  anmastery developer  "
console.log(paddedName.trim()) // anmastery developer
