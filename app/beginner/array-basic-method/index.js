/**
 * Array menyimpan beberapa nilai dalam satu variabel.
 * Contoh ini berisi beberapa nama buah.
 */
const fruits = ["apples", "pomegranate", "mango", "strawberries", "pineapple", "grapefruit"]

console.log(fruits)

/** push() menambahkan buah baru di akhir array. */
fruits.push("banana")

/** pop() menghapus buah terakhir dari array. */
fruits.pop()

/** shift() menghapus buah pertama dari array. */
fruits.shift()

/** unshift() menambahkan buah baru di awal array. */
fruits.unshift("orange")

/**
 * concat() menggabungkan dua array dan membuat array baru.
 * Array asal tidak berubah.
 */
const moreFruits = ["strawberries", "pineapple", "grapefruit"]
const totalFruits = fruits.concat(moreFruits)
console.log(totalFruits)

/** Tampilkan isi array fruits setelah ditambah dan dihapus. */
console.log(fruits)
