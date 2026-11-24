/**
 * Event adalah aksi yang terjadi di halaman, seperti klik, mengetik, atau
 * menggerakkan mouse. Ada tiga cara untuk menangani event:
 *
 * 1. Inline handler (`onclick="..."` di HTML)
 *    - Kurang disarankan: mencampur HTML dan JavaScript, sulit dirawat.
 * 2. Property handler (`element.onclick = fn`)
 *    - Kurang disarankan: hanya bisa menyimpan SATU handler, yang baru menimpa yang lama.
 * 3. `addEventListener(type, handler, options)`
 *    - Disarankan: bisa menambah banyak handler, bisa dihapus, dan mendukung opsi.
 *
 * Catatan: buka `index.html` di browser, klik tombolnya, lalu lihat tab Console.
 */

/**
 * 1. Cara pertama (inline) ada langsung di `index.html`:
 * `<button onclick="console.log('Inline handler dijalankan')">`.
 */

/** 2. Property handler: handler kedua menimpa handler pertama. */
const propertyButton = document.querySelector(".property-button")

propertyButton.onclick = () => {
    console.log("Handler pertama") // tidak pernah dijalankan karena ditimpa
}
propertyButton.onclick = () => {
    console.log("Handler kedua menimpa handler pertama")
}

/** 3. `addEventListener()`: semua handler tetap berjalan sesuai urutan pendaftarannya. */
const listenerButton = document.querySelector(".listener-button")

/**
 * Handler bernama agar dapat dihapus kembali dengan `removeEventListener()`.
 *
 * @returns {void}
 */
function logFirstListener() {
    console.log("Listener pertama")
}

listenerButton.addEventListener("click", logFirstListener)
listenerButton.addEventListener("click", () => {
    console.log("Listener kedua juga berjalan")
})

/** `removeEventListener()` membutuhkan referensi fungsi yang SAMA dengan saat didaftarkan. */
listenerButton.removeEventListener("click", logFirstListener)

/** Opsi `{ once: true }` membuat listener otomatis terhapus setelah dijalankan sekali. */
const onceButton = document.querySelector(".once-button")
onceButton.addEventListener(
    "click",
    () => {
        console.log("Listener ini hanya berjalan satu kali")
    },
    { once: true },
)

/**
 * 4. Event object (`event`) berisi informasi tentang event yang terjadi.
 * - `event.type`          : jenis event, mis. "click".
 * - `event.target`        : elemen yang benar-benar diklik.
 * - `event.currentTarget` : elemen tempat listener dipasang.
 */
const eventBox = document.querySelector(".event-box")

eventBox.addEventListener("click", (event) => {
    console.log(event.type) // "click"
    console.log(event.target.className) // "event-child" jika teks tebal yang diklik
    console.log(event.currentTarget.className) // "event-box"
    console.log(`Posisi klik: ${event.clientX}, ${event.clientY}`)
})
