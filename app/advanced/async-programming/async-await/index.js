/**
 * `async` dan `await` adalah syntactic sugar di atas Promise yang memungkinkan
 * kita menulis kode asinkron dengan gaya seolah-olah sinkron dan mudah dibaca.
 *
 * - Fungsi dengan kata kunci `async` selalu mengembalikan sebuah Promise.
 * - Kata kunci `await` menjeda eksekusi di dalam fungsi `async` hingga Promise selesai.
 */

/**
 * Simulasi mengambil data profil user dari server.
 *
 * @param {string} username Nama pengguna.
 * @returns {Promise<{ id: number, username: string }>} Promise berisi data user.
 */
function fetchUser(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!username) {
                reject(new Error("Username tidak boleh kosong."))
                return
            }
            resolve({ id: 101, username })
        }, 50)
    })
}

/**
 * Simulasi mengambil daftar proyek milik user.
 *
 * @param {number} userId ID pengguna.
 * @returns {Promise<string[]>} Promise berisi daftar nama proyek.
 */
function fetchUserProjects(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([`javascript-blueprint (user ${userId})`, `node-api-starter (user ${userId})`])
        }, 50)
    })
}

/**
 * 1. Eksekusi berurutan menggunakan `async`/`await` dan penanganan error `try...catch`.
 *
 * @param {string} username Nama pengguna yang ingin dimuat.
 * @returns {Promise<void>}
 */
async function loadDashboard(username) {
    try {
        const user = await fetchUser(username)
        const projects = await fetchUserProjects(user.id)

        console.log("User:", user.username)
        console.log("Projects:", projects)
    } catch (error) {
        console.log("Gagal memuat dashboard:", error.message)
    }
}

/**
 * 2. Menjalankan tugas independen secara paralel dengan `Promise.all()` + `await`.
 *
 * @returns {Promise<void>}
 */
async function loadParallelUsers() {
    const [firstUser, secondUser] = await Promise.all([fetchUser("anmastery"), fetchUser("nadia")])

    console.log("Parallel users:", [firstUser.username, secondUser.username])
}

/** Jalankan contoh secara berurutan agar output di terminal rapi. */
async function main() {
    await loadDashboard("anmastery")
    await loadDashboard("nadia")
    await loadParallelUsers()
}

main()
