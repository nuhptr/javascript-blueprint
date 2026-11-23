/**
 * Keyboard events menangani penekanan tombol pada keyboard, umumnya pada
 * elemen `<input>`, `<textarea>`, atau `document`.
 *
 * Urutan event saat tombol ditekan lalu dilepas:
 * 1. `keydown` - saat tombol mulai ditekan (menangkap semua tombol termasuk Shift/Ctrl/Arrow).
 * 2. `keyup`   - saat tombol dilepas.
 *
 * Catatan: event `keypress` sudah deprecated; gunakan `keydown` untuk kode modern.
 * Buka `index.html` di browser, ketik di kotak input, lalu lihat Console.
 */

const keyInput = document.querySelector(".key-input")
const keyOutput = document.querySelector(".key-output")

/**
 * Menampilkan detail tombol yang ditekan melalui `keydown`.
 * Property penting pada `KeyboardEvent`:
 * - `event.key`     : karakter atau nama tombol (mis. "a", "Enter", "Escape").
 * - `event.code`    : posisi fisik tombol pada keyboard (mis. "KeyA", "Space").
 * - `event.ctrlKey` : `true` jika tombol Ctrl ikut ditekan.
 * - `event.shiftKey`: `true` jika tombol Shift ikut ditekan.
 */
keyInput.addEventListener("keydown", (event) => {
    const details = `key: "${event.key}" | code: "${event.code}" | ctrl: ${event.ctrlKey} | shift: ${event.shiftKey}`
    keyOutput.textContent = details
    console.log(details)

    /** Contoh pintasan keyboard: Ctrl + K (atau Cmd + K di macOS). */
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        console.log("Shortcut Ctrl/Cmd + K terdeteksi!")
    }
})

/** Event `keyup` cocok digunakan setelah nilai input selesai berubah. */
keyInput.addEventListener("keyup", (event) => {
    console.log(`keyup: "${event.key}" | isi saat ini: "${event.target.value}"`)
})
