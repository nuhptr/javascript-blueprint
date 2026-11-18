/** Array berisi tiga string yang akan diproses satu per satu. */
const array = ["a", "b", "c"]

/**
 * for...of mengambil setiap nilai dari iterable (seperti array) secara berurutan.
 * Pada setiap putaran, element berisi satu nilai dari array.
 * Hasil yang dicetak:
 * a
 * b
 * c
 */
for (const element of array) {
    console.log(element)
}
