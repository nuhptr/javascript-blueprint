/**
 * Array menyimpan beberapa nilai dalam satu variabel.
 * Contoh ini berisi beberapa nama buah.
 */
const fruits = ["apples", "pomegranate", "mango", "strawberries", "pineapple", "grapefruit"]

/**
 * push() menambahkan buah baru di akhir array.
 * Array menjadi: ..., "banana".
 */
fruits.push("banana")

/**
 * pop() menghapus buah terakhir dari array.
 * "banana" yang baru ditambahkan akan dihapus.
 */
fruits.pop()

/**
 * shift() menghapus buah pertama dari array.
 * "apples" akan dihapus.
 */
fruits.shift()

/**
 * unshift() menambahkan buah baru di awal array.
 * "orange" menjadi item pertama.
 */
fruits.unshift("orange")

/**
 * Output: ["orange", "pomegranate", "mango", "strawberries",
 * "pineapple", "grapefruit"].
 */
console.log(fruits)

/**
 * concat() menggabungkan dua array dan membuat array baru.
 * Array asal tidak berubah.
 * Output: ["orange", "pomegranate", "mango", "strawberries",
 * "pineapple", "grapefruit", "strawberries", "pineapple", "grapefruit"].
 */
const moreFruits = ["strawberries", "pineapple", "grapefruit"]
const totalFruits = fruits.concat(moreFruits)
console.log(totalFruits)

/**
 * Tampilkan isi array fruits setelah ditambah dan dihapus.
 * Output: ["orange", "pomegranate", "mango", "strawberries",
 * "pineapple", "grapefruit"].
 */
console.log(fruits)
