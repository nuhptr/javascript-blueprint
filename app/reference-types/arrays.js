/**
 * Array adalah satu variabel yang bisa menyimpan banyak nilai.
 * Nilai di dalam array ditulis di antara [ ] dan dipisahkan dengan koma.
 */
const favSingers = ["21 Savage", "Post Malone", "NF"]
/** Angka indeks dimulai dari 0, jadi [0] mengambil nilai pertama. */
console.log(favSingers[0])

/** Array juga bisa menyimpan angka. */
const favNumbers = [321, 123, 1, 23]
console.log(favNumbers)

/**
 * Array dapat berisi berbagai tipe nilai, termasuk array lain.
 */
const mixedArr = ["string", ["otherarray"], 123, true]
console.log(mixedArr)

/** Gunakan indeks untuk mengambil nilai dari posisi tertentu. */
console.log(favSingers[0])
console.log(favSingers[1])
console.log(favSingers[2])
/** [3] mengambil nilai keempat, yaitu true. */
console.log(mixedArr[3])
