/**
 * AND (&&) menghasilkan true jika kedua kondisi benar.
 * Jika salah satunya false, hasilnya false.
 */
const a = true
const b = false
const c = 4

console.log(a && a) /** true */
console.log(a && b) /** false */

console.log(c > 2 && c < 2) /** false */

/**
 * OR (||) menghasilkan true jika minimal satu kondisi benar.
 * Hasilnya false hanya jika kedua kondisi salah.
 */

console.log(a || b) /** true */
console.log(b || b) /** false */
console.log(c > 2 || c < 2) /** true */

/**
 * NOT (!) membalik nilai: true menjadi false, dan false menjadi true.
 */
console.log(!a) /** false */
console.log(!b) /** true */

/**
 * Contoh: password valid jika panjangnya minimal 8 karakter
 * DAN mengandung teks "web".
 */
let password = "anmastery developer"

if (password.length >= 8 && password.includes("anmastery")) {
    console.log("VALID PASSWORD")
} else {
    console.log("Invalid password")
}
