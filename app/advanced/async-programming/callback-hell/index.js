/**
 * Callback hell (sering disebut "pyramid of doom") terjadi ketika beberapa operasi
 * asinkron yang saling bergantung ditulis dengan callback bersarang terlalu dalam.
 *
 * Masalah utama callback hell:
 * 1. Kode sulit dibaca dan dipelihara karena indentasi semakin menjorok ke kanan.
 * 2. Penanganan error harus diulang di setiap tingkat callback.
 *
 * Untuk mengatasi ini secara modern, gunakan Promise atau `async`/`await`.
 */

/**
 * Simulasi mengambil data user secara asinkron dengan callback.
 *
 * @param {string} username Nama pengguna yang dicari.
 * @param {(user: { id: number, username: string }) => void} callback Fungsi penerima hasil.
 * @returns {void}
 */
function fetchUser(username, callback) {
    setTimeout(() => {
        callback({ id: 1, username })
    }, 50)
}

/**
 * Simulasi mengambil daftar hobi milik user berdasarkan `userId`.
 *
 * @param {number} userId ID pengguna.
 * @param {(hobbies: string[]) => void} callback Fungsi penerima daftar hobi.
 * @returns {void}
 */
function fetchUserHobbies(userId, callback) {
    setTimeout(() => {
        callback(["Coding", "Reading", `User#${userId} Gaming`])
    }, 50)
}

/**
 * Simulasi memformat ringkasan akhir dari hobi user.
 *
 * @param {string[]} hobbies Daftar hobi.
 * @param {(summary: string) => void} callback Fungsi penerima ringkasan.
 * @returns {void}
 */
function formatSummary(hobbies, callback) {
    setTimeout(() => {
        callback(`Hobi utama: ${hobbies.join(", ")}`)
    }, 50)
}

/**
 * Contoh callback bersarang (callback hell):
 * Setiap langkah harus menunggu hasil langkah sebelumnya di dalam callback.
 */
console.log("Memulai proses callback bertingkat...") // Memulai proses callback bertingkat...

fetchUser("anmastery", (user) => {
    console.log("1. User ditemukan:", user.username) // 1. User ditemukan: anmastery
    fetchUserHobbies(user.id, (hobbies) => {
        console.log("2. Hobi ditemukan:", hobbies) // 2. Hobi ditemukan: [ 'Coding', 'Reading', 'User#1 Gaming' ]
        formatSummary(hobbies, (summary) => {
            console.log("3. Ringkasan selesai:", summary) // 3. Ringkasan selesai: Hobi utama: Coding, Reading, User#1 Gaming
        })
    })
})
