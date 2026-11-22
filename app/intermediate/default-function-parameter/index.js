/**
 * Default parameter digunakan saat argumen tidak diberikan atau nilainya
 * undefined. Nilai default dievaluasi saat fungsi dipanggil.
 */

/**
 * Menambahkan satu nilai ke array.
 *
 * @param {*} value Nilai yang ditambahkan ke array.
 * @param {Array} [array=[]] Array tujuan.
 * @returns {Array} Array yang sudah berisi value.
 */
function append(value, array = []) {
    array.push(value)
    return array
}

/** Pemanggilan ini membuat array baru karena array tidak diberikan. */
console.log(append(1)) // [1]

/** Pemanggilan ini juga membuat array baru, bukan melanjutkan pemanggilan sebelumnya. */
console.log(append(2)) // [2]

/** Array yang diberikan tetap digunakan dan tidak diganti dengan array default. */
const numbers = [1]
console.log(append(2, numbers)) // [1, 2]

/**
 * Mengalikan dua angka.
 *
 * @param {number} a Angka pertama.
 * @param {number} [b=1] Angka kedua. Jika tidak diberikan, nilainya 1.
 * @returns {number} Hasil perkalian a dan b.
 */
function multiply(a, b = 1) {
    return a * b
}

/** b memiliki nilai 2, sehingga hasilnya 5 * 2 = 10. */
console.log(multiply(5, 2)) // 10

/** b tidak diberikan, sehingga JavaScript memakai nilai default 1. */
console.log(multiply(5)) // 5
