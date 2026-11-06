/**
 * Array adalah tempat untuk menyimpan beberapa nilai dalam satu variabel.
 * Nilai di dalam array ditulis di antara [ ] dan dipisahkan dengan koma.
 */

/** Array kosong belum berisi nilai apa pun. */
const myList = []

/** Array ini berisi angka. */
const numberArray = [2, 4, 6, 8]

/** Array ini berisi teks atau string. */
const stringArray = ["eat", "work", "sleep"]

/**
 * Array juga bisa menyimpan berbagai jenis nilai,
 * seperti object, array lain, dan function.
 */
const newData = [
    { task1: "exercise" },
    [1, 2, 3],
    function hello() {
        console.log("hello")
    },
]

/**
 * Gunakan indeks untuk mengambil nilai dari array.
 * Indeks dimulai dari 0, jadi indeks 0 adalah nilai pertama.
 */
const myArray = ["h", "e", "l", "l", "o"]

/** Ambil huruf pertama. */
console.log(myArray[0])

/** Ambil huruf kedua. */
console.log(myArray[1])
