/** Array berisi angka-angka yang akan dijumlahkan. */
let numbers = [1, 2, 3, 4, 5]

/** Variabel ini menyimpan total sementara, dimulai dari 0. */
let sum = 0

/**
 * Tambahkan satu angka ke total yang tersimpan di sum.
 *
 * @param {number} number Angka yang sedang diproses.
 * @returns {void} Total diperbarui langsung melalui variabel sum.
 */
function adder(number) {
    sum += number
}

/**
 * forEach memanggil adder sekali untuk setiap item di numbers.
 * Setelah semua item diproses, sum berisi jumlah seluruh angka.
 */
numbers.forEach(adder)

/** Output: 15 (hasil dari 1 + 2 + 3 + 4 + 5). */
console.log(sum)
