/**
 * Synchronous vs Asynchronous menjelaskan perbedaan cara JavaScript mengeksekusi
 * tugas secara berurutan (blocking) dibanding menjadwalkan tugas di latar belakang
 * (non-blocking) melalui Event Loop.
 *
 * - Synchronous: setiap baris menunggu baris sebelumnya selesai.
 * - Asynchronous: operasi berdurasi lama (timer, I/O, network) dijalankan tanpa
 *   memblokir baris kode berikutnya.
 */

/**
 * 1. Contoh eksekusi Synchronous.
 * Seluruh langkah berjalan berurutan dari atas ke bawah.
 *
 * @returns {void}
 */
function runSynchronousExample() {
    console.log("=== Synchronous ===")
    console.log("1. Mulai tugas sinkron")
    console.log("2. Memproses data secara langsung")
    console.log("3. Selesai tugas sinkron")
}

/**
 * 2. Contoh eksekusi Asynchronous menggunakan `setTimeout()`.
 * Callback di dalam `setTimeout` akan dijalankan setelah call stack kosong
 * dan jeda waktu tercapai, sehingga langkah "C" tercetak lebih dulu dari "B".
 *
 * @returns {void}
 */
function runAsynchronousExample() {
    console.log("\n=== Asynchronous ===")
    console.log("A. Mulai permintaan data")

    setTimeout(() => {
        console.log("B. Data diterima setelah jeda asinkron (100ms)")
    }, 100)

    console.log("C. Kode berikutnya tetap berjalan tanpa menunggu")
}

runSynchronousExample()
runAsynchronousExample()
// Urutan output bagian Asynchronous:
// A. Mulai permintaan data
// C. Kode berikutnya tetap berjalan tanpa menunggu
// B. Data diterima setelah jeda asinkron (100ms)
