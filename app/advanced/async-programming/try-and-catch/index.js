/**
 * Blok `try...catch...finally` digunakan untuk menangani error saat runtime
 * agar aplikasi tidak langsung crash ketika terjadi kegagalan.
 *
 * - `try`     : blok kode yang berpotensi menimbulkan error.
 * - `catch`   : blok yang dijalankan jika terjadi error di dalam `try`.
 * - `finally` : blok yang selalu dijalankan baik terjadi error maupun tidak
 *               (berguna untuk membersihkan resource atau menutup loading state).
 */

/**
 * 1. Parsing JSON secara aman menggunakan `try...catch`.
 * `JSON.parse()` akan melempar `SyntaxError` jika string JSON tidak valid.
 *
 * @param {string} jsonString String berformat JSON.
 * @returns {object | null} Object hasil parsing, atau `null` jika gagal.
 */
function safeParseJson(jsonString) {
    try {
        return JSON.parse(jsonString)
    } catch (error) {
        console.log(`Error (${error.name}): ${error.message}`)
        return null
    }
}

const validJson = '{"name": "anmastery", "level": "advanced"}'
const invalidJson = '{"name": "anmastery", "level": }'

console.log("Valid JSON:", safeParseJson(validJson))
// { name: "anmastery", level: "advanced" }
console.log("Invalid JSON:", safeParseJson(invalidJson))
// null

/**
 * 2. Melempar error kustom dengan `throw new Error(...)` dan menggunakan `finally`.
 *
 * @param {number} numerator Pembilang.
 * @param {number} denominator Penyebut (tidak boleh 0).
 * @returns {number} Hasil pembagian.
 */
function divide(numerator, denominator) {
    if (denominator === 0) throw new Error("Pembagi tidak boleh bernilai 0.")

    return numerator / denominator
}

try {
    console.log("10 / 2 =", divide(10, 2)) // 5
    console.log("10 / 0 =", divide(10, 0))
} catch (error) {
    console.log("Menangkap error pembagian:", error.message)
} finally {
    console.log("Blok finally selalu dijalankan.")
}

/**
 * 3. `try...catch` pada fungsi `async`/`await`.
 * Error dari Promise yang di-reject otomatis masuk ke blok `catch`.
 *
 * @param {boolean} shouldFail Menentukan apakah simulasi permintaan akan gagal.
 * @returns {Promise<string>} Pesan hasil operasi.
 */
function simulateRequest(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Koneksi ke server terputus."))
                return
            }
            resolve("Data berhasil dimuat.")
        }, 40)
    })
}

/**
 * Menjalankan contoh penanganan error asinkron.
 *
 * @returns {Promise<void>}
 */
async function runAsyncTryCatch() {
    try {
        const result = await simulateRequest(true)
        console.log(result)
    } catch (error) {
        console.log("Error async tertangkap:", error.message)
    } finally {
        console.log("Proses request selesai.")
    }
}

runAsyncTryCatch()
