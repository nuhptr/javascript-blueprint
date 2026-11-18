/**
 * Jalankan callback berulang kali dengan jeda sekitar 1 detik.
 * Simpan ID timer agar interval bisa dihentikan dengan clearInterval().
 */
const intervalId = setInterval(function () {
    console.log("This function is being executed at the interval")
}, 1000)

/**
 * Setelah sekitar 10 detik, hentikan interval dan cetak pesan.
 * setTimeout() berjalan satu kali; jedanya tidak dijamin tepat karena
 * callback menunggu giliran event loop.
 */
setTimeout(function () {
    clearInterval(intervalId)
    console.log("Interval stopped.")
}, 10000)
