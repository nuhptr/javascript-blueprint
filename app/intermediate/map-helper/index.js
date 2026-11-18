/** Array angka yang setiap nilainya akan dikalikan 10. */
const numbers = [65, 44, 12, 4]

/**
 * Kalikan satu angka dengan 10.
 *
 * @param {number} number Angka yang sedang diproses oleh map().
 * @returns {number} Angka hasil perkalian dengan 10.
 */
function multiplyByTen(number) {
    return number * 10
}

/**
 * map() memanggil multiplyByTen untuk setiap item dan membuat array baru.
 * Array numbers tetap tidak berubah.
 */
const newArr = numbers.map(multiplyByTen)

/** Output: [650, 440, 120, 40]. */
console.log(newArr)
