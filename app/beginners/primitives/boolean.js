/**
 * Boolean adalah tipe data yang hanya memiliki dua nilai:
 * true (benar) dan false (salah).
 */
const isLoggedIn = true
const hasPaid = false

console.log("Sudah login:", isLoggedIn)
console.log("Sudah membayar:", hasPaid)

/**
 * Operator perbandingan menghasilkan nilai Boolean.
 */
const age = 20

console.log("Umur sama dengan 20:", age === 20) // true
console.log("Umur lebih dari 17:", age > 17) // true
console.log("Umur kurang dari 18:", age < 18) // false
console.log("Umur tidak sama dengan 21:", age !== 21) // true

/**
 * Operator logika menggabungkan atau membalik nilai Boolean:
 * && berarti DAN, || berarti ATAU, dan ! berarti TIDAK.
 */
const hasTicket = true
const isOldEnough = age >= 17

console.log("Boleh masuk:", hasTicket && isOldEnough) // true: keduanya harus true
console.log("Mendapat diskon:", isLoggedIn || hasPaid) // true: salah satu true
console.log("Belum login:", !isLoggedIn) // false: membalik true menjadi false

/**
 * Boolean sering digunakan untuk menentukan alur program.
 */
if (hasTicket && isOldEnough) {
    console.log("Silakan masuk.")
} else {
    console.log("Maaf, kamu belum bisa masuk.")
}

/**
 * Nilai selain Boolean juga dapat diperiksa sebagai truthy atau falsy.
 * Contoh falsy: false, 0, "", null, undefined, dan NaN.
 * Nilai lain, termasuk "false" (teks), bersifat truthy.
 */
console.log("Boolean dari 0:", Boolean(0)) // false
console.log("Boolean dari teks kosong:", Boolean("")) // false
console.log("Boolean dari angka 1:", Boolean(1)) // true
console.log('Boolean dari teks "false":', Boolean("false")) // true

/**
 * Gunakan perbandingan ketat (=== dan !==) agar tipe data ikut diperiksa.
 */
console.log('Angka 5 sama dengan teks "5" secara ketat:', 5 === "5") // false
