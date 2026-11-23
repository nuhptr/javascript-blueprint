/**
 * `classList` adalah cara utama untuk mengelola class CSS pada sebuah elemen.
 * Daripada mengubah banyak style satu per satu lewat JavaScript, cukup
 * tambahkan atau hapus class yang sudah didefinisikan di CSS.
 *
 * Method yang sering dipakai:
 * 1. `add()`      - menambahkan class.
 * 2. `remove()`   - menghapus class.
 * 3. `toggle()`   - menambah jika belum ada, menghapus jika sudah ada.
 * 4. `contains()` - mengecek apakah class ada (`true`/`false`).
 * 5. `replace()`  - mengganti satu class dengan class lain.
 *
 * Catatan: buka `index.html` di browser, lalu lihat hasilnya di tab Console.
 */

const title = document.querySelector(".title")

/** 1. `classList` berisi daftar class milik elemen. */
console.log(title.classList) // DOMTokenList(2) ["title", "styles"]

/** 2. `add()` dan `remove()` dapat menerima lebih dari satu class sekaligus. */
title.classList.add("highlight")
console.log(title.classList.contains("highlight")) // true

title.classList.remove("styles")
console.log(title.classList.contains("styles")) // false

/** 3. `toggle()` mengembalikan `true` jika class ditambahkan dan `false` jika dihapus. */
console.log(title.classList.toggle("styles")) // true (class ditambahkan)
console.log(title.classList.toggle("styles")) // false (class dihapus)

/** Argumen kedua `toggle(className, force)` memaksa hasil: `true` = selalu tambah, `false` = selalu hapus. */
title.classList.toggle("styles", true)
console.log(title.classList.contains("styles")) // true

/** 4. `replace()` mengganti class lama dengan class baru di posisi yang sama. */
title.classList.replace("highlight", "dark-theme")
console.log([...title.classList]) // ["title", "dark-theme", "styles"]

/**
 * 5. Contoh praktis: tombol ganti tema gelap/terang.
 *
 * @returns {void}
 */
function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-theme")
    console.log(isDark ? "Tema gelap aktif" : "Tema terang aktif")
}

const themeToggleButton = document.querySelector(".theme-toggle")
themeToggleButton.addEventListener("click", toggleTheme)
