/**
 * Array menyimpan beberapa nilai dalam satu variabel.
 */
const programmingLanguages = ["JavaScript", "Golang", "Python", "php"]
const numberList = [3, 5, 2, 4, 1]

/**
 * includes() mengecek apakah nilai ada di dalam array.
 * Hasilnya true atau false.
 */
console.log(programmingLanguages.includes("Golang"))

/**
 * join() menggabungkan isi array menjadi satu string.
 * Tanda "-" diletakkan di antara setiap item.
 */
console.log(programmingLanguages.join("-"))

/**
 * reverse() membalik urutan item di array yang sama.
 */
console.log([...programmingLanguages].reverse())

/**
 * slice() mengambil sebagian isi array tanpa mengubah array asal.
 * Angka kedua adalah posisi berhenti dan tidak ikut diambil.
 */
console.log(programmingLanguages.slice(0, 3))

/**
 * sort() mengurutkan item di array yang sama.
 * Salin array dulu agar urutan numberList tetap seperti semula.
 */
console.log([...numberList].sort((angkaPertama, angkaKedua) => angkaPertama - angkaKedua))
