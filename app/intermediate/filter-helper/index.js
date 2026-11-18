/** Array angka yang akan disaring berdasarkan usia dewasa. */
const ages = [32, 33, 16, 40]

/**
 * Periksa apakah sebuah angka berisi usia 18 tahun atau lebih.
 *
 * @param {number} age Usia yang akan diperiksa.
 * @returns {boolean} true jika usia termasuk dewasa, selain itu false.
 */
const checkAdult = (age) => {
    return age >= 18
}

/**
 * filter() membuat array baru berisi item yang memenuhi kondisi checkAdult().
 * Output: [32, 33, 40].
 */
const res = ages.filter(checkAdult)
console.log(res)

/** Array kata yang akan disaring berdasarkan panjangnya. */
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]

/**
 * filter() mempertahankan kata yang panjangnya lebih dari 6 karakter.
 * Output: ["exuberant", "destruction", "present"].
 */
const result = words.filter((word) => word.length > 6)
console.log(result)
