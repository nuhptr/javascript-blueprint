/**
 * DOM (Document Object Model) adalah representasi halaman HTML dalam bentuk
 * pohon object (tree) yang dibuat browser saat halaman dimuat.
 *
 * Setiap tag HTML menjadi sebuah node/object, sehingga JavaScript dapat
 * membaca, mengubah, menambah, atau menghapus isi halaman secara dinamis.
 * Titik masuk utama ke DOM adalah object global `document`.
 *
 * Catatan: materi DOM berjalan di browser, bukan di Node.js/Bun.
 * Buka `index.html` di browser, lalu lihat hasilnya di tab Console (DevTools).
 */

/** Seluruh dokumen HTML dalam bentuk object yang bisa ditelusuri. */
console.log(document) // #document

/** Elemen root `<html>` dari halaman. */
console.log(document.documentElement) // <html lang="en">...</html>

/** Bagian `<head>` yang berisi metadata halaman. */
console.log(document.head) // <head>...</head>

/** Teks di dalam tag `<title>`. */
console.log(document.title) // "DOM"

/** Bagian `<body>` yang berisi konten yang terlihat di halaman. */
console.log(document.body) // <body>...</body>

/** URL lengkap dari dokumen yang sedang dibuka. */
console.log(document.documentURI) // "file:///.../what-is-dom/index.html"

/**
 * `document.title` juga bisa diubah, dan perubahannya langsung terlihat
 * pada judul tab browser.
 */
document.title = "DOM bersama anmastery"
console.log(document.title) // "DOM bersama anmastery"
