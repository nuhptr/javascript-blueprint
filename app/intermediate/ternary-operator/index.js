/**
 * Ternary operator (`condition ? exprIfTrue : exprIfFalse`) adalah bentuk singkat
 * dari pernyataan kondisional `if...else` yang menghasilkan sebuah nilai (expression).
 *
 * Operator ini cocok digunakan untuk pemilihan nilai sederhana yang terdiri dari
 * dua kemungkinan. Untuk logika bercabang yang kompleks, tetap gunakan `if...else`
 * agar kode mudah dibaca.
 */

/**
 * 1. Memeriksa kekuatan panjang password menggunakan ternary operator.
 * Menggunakan panjang string (`password.length >= 8`) jauh lebih tepat
 * dibandingkan membandingkan angka mentah.
 *
 * @param {string} password Password yang akan divalidasi.
 * @returns {string} Pesan hasil validasi kekuatan password.
 */
function checkPasswordStrength(password) {
    return password.length >= 8 ? "Strong password" : "Password should be at least 8 characters"
}

console.log(checkPasswordStrength("abc123")) // "Password should be at least 8 characters"
console.log(checkPasswordStrength("securePass99")) // "Strong password"

/**
 * 2. Menentukan status usia secara ringkas pada deklarasi variabel.
 */
const age = 25
const ageCategory = age >= 18 ? "Adult" : "Not an Adult"

console.log(ageCategory) // "Adult"

/**
 * 3. Refactor `if...else` menjadi ternary operator untuk kelayakan memilih.
 *
 * @param {number} voterAge Usia calon pemilih.
 * @returns {string} Status kelayakan untuk memberikan suara.
 */
function checkVotingEligibility(voterAge) {
    return voterAge >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet."
}

console.log(checkVotingEligibility(15)) // "You are not eligible to vote yet."
console.log(checkVotingEligibility(20)) // "You are eligible to vote."

/**
 * 4. Ternary bersarang (nested ternary) untuk menentukan tanda bilangan.
 * Catatan: gunakan nested ternary hanya untuk kondisi yang sangat ringkas;
 * jika kondisinya bertambah panjang, ubah ke `if...else if...else`.
 *
 * @param {number} value Angka yang akan diperiksa.
 * @returns {"positive" | "negative" | "zero"} Klasifikasi tanda angka.
 */
function classifyNumber(value) {
    return value === 0 ? "zero" : value > 0 ? "positive" : "negative"
}

const sampleNumber = 3
console.log(`The number is ${classifyNumber(sampleNumber)}.`) // "The number is positive."
console.log(`The number is ${classifyNumber(0)}.`) // "The number is zero."
console.log(`The number is ${classifyNumber(-7)}.`) // "The number is negative."
