/**
 * Promise adalah object yang merepresentasikan hasil akhir (berhasil atau gagal)
 * dari sebuah operasi asinkron di masa depan.
 *
 * Sebuah Promise selalu berada pada salah satu dari 3 state:
 * 1. `pending`   - Operasi masih berjalan.
 * 2. `fulfilled` - Operasi berhasil (`resolve(value)`).
 * 3. `rejected`  - Operasi gagal (`reject(reason)`).
 */

/**
 * 1. Membuat Promise sederhana untuk memeriksa apakah angka bernilai genap.
 *
 * @param {number} number Angka yang akan diperiksa.
 * @returns {Promise<string>} Promise yang resolve jika genap dan reject jika ganjil.
 */
function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number % 2 === 0) resolve(`${number} adalah angka genap.`)
            else reject(new Error(`${number} adalah angka ganjil.`))
        }, 50)
    })
}

/** Menangani Promise dengan `.then()`, `.catch()`, dan `.finally()`. */
checkEvenNumber(10)
    .then((message) => {
        console.log("Berhasil:", message) // "Berhasil: 10 adalah angka genap."
        return checkEvenNumber(7)
    })
    .catch((error) => {
        console.log("Tertangkap di catch:", error.message) // "Tertangkap di catch: 7 adalah angka ganjil."
    })
    .finally(() => {
        console.log("Pengecekan angka selesai.")
    })

/**
 * 2. Promise chaining dan eksekusi paralel menggunakan `Promise.all()`.
 *
 * @param {string} taskName Nama tugas.
 * @param {number} delayMs Lama simulasi dalam milidetik.
 * @returns {Promise<string>} Promise yang menghasilkan status selesai.
 */
function runTask(taskName, delayMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Tugas "${taskName}" selesai (${delayMs}ms)`)
        }, delayMs)
    })
}

/** Menjalankan beberapa Promise secara paralel dan menunggu seluruhnya selesai. */
Promise.all([runTask("Ambil profil anmastery", 60), runTask("Ambil daftar kursus", 40)]).then(
    (results) => {
        console.log("Hasil Promise.all:", results)
    },
)
