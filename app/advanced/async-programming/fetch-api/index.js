/**
 * Fetch API (`fetch()`) adalah antarmuka modern bawaan browser, Node.js (18+),
 * dan Bun untuk mengambil resource (teks, JSON, file, atau REST API) secara asinkron
 * dengan mengembalikan sebuah Promise.
 *
 * Catatan penting:
 * - `fetch()` hanya reject saat terjadi gangguan jaringan; status HTTP seperti
 *   404 atau 500 tetap resolve, sehingga wajib memeriksa `response.ok`.
 * - Contoh di bawah memakai `data:` URL agar tetap menggunakan `fetch()` asli
 *   dan dapat dijalankan secara andal baik saat online maupun offline.
 */

/**
 * 1. Helper reusable untuk mengambil dan mem-parsing respons JSON dengan Fetch API.
 * Fungsi ini dapat langsung dipakai untuk endpoint HTTP nyata seperti
 * `https://jsonplaceholder.typicode.com/posts/1`.
 *
 * @param {string} url Alamat endpoint atau resource yang akan diambil.
 * @returns {Promise<object>} Data JSON hasil parsing dari respons.
 */
async function fetchJson(url) {
    const response = await fetch(url)

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

    return response.json()
}

/**
 * 2. Helper untuk mengambil data teks biasa dengan Fetch API.
 *
 * @param {string} url Alamat resource teks.
 * @returns {Promise<string>} Isi teks dari respons.
 */
async function fetchText(url) {
    const response = await fetch(url)

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

    return response.text()
}

/**
 * Menjalankan demonstrasi Fetch API untuk teks biasa dan JSON.
 *
 * @returns {Promise<void>}
 */
async function main() {
    const sampleTextUrl = `data:text/plain;charset=utf-8,${encodeURIComponent(
        "Halo dari Fetch API bersama anmastery!",
    )}`

    const samplePayload = {
        id: 1,
        creator: "anmastery",
        topic: "Fetch API",
        completed: true,
    }
    const sampleJsonUrl = `data:application/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(samplePayload),
    )}`

    try {
        const textData = await fetchText(sampleTextUrl)
        console.log("Text response:", textData)
        // "Text response: Halo dari Fetch API bersama anmastery!"

        const jsonData = await fetchJson(sampleJsonUrl)
        console.log("JSON response:", jsonData)
        // { id: 1, creator: "anmastery", topic: "Fetch API", completed: true }
    } catch (error) {
        console.log("Fetch gagal:", error.message)
    }
}

main()
