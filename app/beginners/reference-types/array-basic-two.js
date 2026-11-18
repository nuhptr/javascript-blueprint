/**
 * Array menyimpan beberapa nilai dalam satu variabel.
 */
const programmingLanguages = ["JavaScript", "Golang", "Python", "php"]
const numberList = [3, 5, 2, 4, 1]

/**
 * includes() mengecek apakah nilai ada di dalam array.
 * Hasilnya true atau false.
 * Output: true karena "Golang" ada di dalam programmingLanguages.
 */
console.log(programmingLanguages.includes("Golang"))

/**
 * join() menggabungkan isi array menjadi satu string.
 * Tanda "-" diletakkan di antara setiap item.
 * Output: "JavaScript-Golang-Python-php".
 */
console.log(programmingLanguages.join("-"))

/**
 * reverse() membalik urutan item di array yang sama.
 * Spread syntax (...) membuat salinan terlebih dahulu, sehingga array asal
 * programmingLanguages tidak dibalik.
 * Output: ["php", "Python", "Golang", "JavaScript"].
 */
console.log([...programmingLanguages].reverse())

/**
 * slice() mengambil sebagian isi array tanpa mengubah array asal.
 * Angka kedua adalah posisi berhenti dan tidak ikut diambil.
 * Output: ["JavaScript", "Golang", "Python"].
 */
console.log(programmingLanguages.slice(0, 3))

/**
 * sort() mengurutkan item di array yang sama.
 * Salin array dulu agar urutan numberList tetap seperti semula.
 * Callback mengembalikan angka negatif, nol, atau positif untuk menentukan
 * urutan dua angka secara menaik.
 * Output: [1, 2, 3, 4, 5].
 */
console.log([...numberList].sort((angkaPertama, angkaKedua) => angkaPertama - angkaKedua))
