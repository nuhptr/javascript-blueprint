/**
 * Kalikan semua angka di dalam sebuah array.
 *
 * @param {number[]} arr Array angka yang akan dikalikan.
 * @returns {number} Hasil perkalian seluruh angka.
 */
const calculateProduct = (arr) => {
    /**
     * reduce() menggabungkan setiap nilai menjadi satu hasil.
     * Nilai awal accumulator adalah 1 agar perkalian pertama tetap benar.
     */
    const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
    return product
}

/** Array angka yang akan dikalikan: 2 × 3 × 4 × 5. */
const numbers = [2, 3, 4, 5]

/** Panggil calculateProduct() dan simpan hasilnya. */
const product = calculateProduct(numbers)

/** Output: 120. */
console.log(product) // Output: 120
