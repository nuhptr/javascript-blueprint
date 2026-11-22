/**
 * Array destructuring memungkinkan kita membongkar (unpack) elemen array ke dalam
 * variabel terpisah berdasarkan posisi indeksnya.
 *
 * Urutan variabel sangat menentukan nilai yang diterima.
 */

/**
 * 1. Dasar array destructuring.
 * Setiap variabel menerima elemen sesuai urutan indeks pada array sumber.
 */
const numberWords = ["one", "two", "three"]
const [firstWord, secondWord, thirdWord] = numberWords

console.log(firstWord, secondWord, thirdWord) // "one" "two" "three"

/**
 * 2. Jika jumlah variabel lebih banyak dari panjang array, variabel sisanya
 * bernilai `undefined` kecuali diberikan nilai default.
 */
const shortList = ["one", "two"]
const [itemA, itemB, itemC, itemD = "fallback"] = shortList

console.log(itemA, itemB, itemC, itemD) // "one" "two" undefined "fallback"

/**
 * 3. Menukar nilai dua variabel (swapping) tanpa variabel sementara.
 */
let leftValue = 1
let rightValue = 3
;[leftValue, rightValue] = [rightValue, leftValue]

console.log(leftValue, rightValue) // 3 1

/** Menukar elemen langsung di dalam array. */
const numbers = [1, 2, 3]
;[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
console.log(numbers) // [1, 3, 2]

/**
 * 4. Membongkar array yang dikembalikan oleh fungsi dan melewatkan elemen tertentu.
 * Koma kosong (`, ,`) dipakai untuk melewati indeks yang tidak dibutuhkan.
 *
 * @returns {number[]} Array berisi tiga koordinat sederhana.
 */
function getCoordinates() {
    return [10, 20, 30]
}

const [x, , z] = getCoordinates()
console.log(x, z) // 10 30

/**
 * 5. Menggabungkan array destructuring dengan rest operator (`...`).
 */
const [head, ...tail] = [1, 2, 3, 4]
console.log(head) // 1
console.log(tail) // [2, 3, 4]

/**
 * 6. Latihan: mengambil tiga warna pertama dari array `colors`.
 */
const colors = ["red", "green", "blue", "yellow", "orange"]
const [color1, color2, color3] = colors

console.log(color1, color2, color3) // "red" "green" "blue"
