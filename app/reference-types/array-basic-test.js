/**
 * Challenge:
 * Use array methods to:
 * 1. Combine two arrays and check whether a value is present.
 * 2. Add or remove values at the beginning or end of an array.
 * 3. Sort an array and get part of its contents.
 * 4. Add or replace values with splice().
 * Check each result with console.log().
 */

/**
 * concat() menggabungkan dua array dan membuat array baru.
 * Array awal tidak berubah.
 */
const arr1 = ["Cecile", "Lone"]
const arr2 = ["Emil", "Tobias", "Linus"]
const children = arr1.concat(arr2)
console.log(children)

/**
 * includes() memeriksa apakah nilai ada di dalam array.
 * Hasilnya true jika ditemukan, dan false jika tidak.
 */
const words = ["Hello", "world", "welcome"]
const result = words.includes("world")
console.log(result)

/**
 * push() menambahkan nilai ke akhir array yang sama.
 */
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.push("Kiwi")
console.log(fruits)

/**
 * unshift() menambahkan nilai ke awal array yang sama.
 * Nilai yang dikembalikan adalah jumlah item setelah ditambahkan.
 */
const array1 = [1, 2, 3]
console.log(array1.unshift(4, 5))
console.log(array1)

/**
 * pop() menghapus item terakhir dari array dan mengembalikan item itu.
 */
fruits.pop()
console.log(fruits)

/**
 * shift() menghapus item pertama dari array dan mengembalikan item itu.
 */
const array2 = [1, 2, 3]
const firstElement = array2.shift()
console.log(array2)
console.log(firstElement)

/**
 * sort() mengurutkan item di array yang sama.
 * Untuk teks, urutannya berdasarkan abjad.
 */
fruits.sort()
console.log(fruits)

/**
 * slice() mengambil sebagian isi array dan membuat array baru.
 * Angka pertama adalah posisi mulai; angka kedua adalah posisi berhenti
 * dan tidak ikut diambil. Array awal tidak berubah.
 */
const citrus = fruits.slice(1, 3)
console.log(citrus)

/**
 * splice() dapat menambah atau menghapus item di array yang sama.
 * Bentuknya: splice(posisi, jumlahYangDihapus, itemBaru).
 * Di sini, tidak ada item yang dihapus dan "Feb" ditambahkan di posisi 1.
 */
const months = ["Jan", "March", "April", "June"]
months.splice(1, 0, "Feb")
console.log(months)

/**
 * Di sini, satu item dihapus dari posisi 4 lalu diganti dengan "May".
 */
months.splice(4, 1, "May")
console.log(months)
