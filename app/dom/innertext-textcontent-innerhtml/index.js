/**
 * `innerText`, `textContent`, dan `innerHTML` sama-sama dipakai untuk membaca
 * atau mengubah isi sebuah elemen, tetapi hasilnya berbeda:
 *
 * 1. `innerText`   - teks yang TERLIHAT di layar (mengikuti CSS, mis. `display: none`).
 * 2. `textContent` - SEMUA teks mentah di dalam elemen, termasuk yang disembunyikan CSS.
 * 3. `innerHTML`   - isi elemen lengkap beserta tag HTML-nya.
 *
 * Catatan keamanan: jangan memasukkan input pengguna ke `innerHTML` karena
 * bisa menjalankan HTML/script berbahaya (XSS). Gunakan `textContent` untuk teks biasa.
 *
 * Catatan: buka `index.html` di browser, lalu lihat hasilnya di halaman dan tab Console.
 */

const article = document.querySelector(".article")

/** 1. `innerText` hanya mengambil teks yang tampil, jadi `.secret` tidak ikut. */
console.log(article.innerText) // "Belajar DOM bersama anmastery"

/** 2. `textContent` mengambil semua teks, termasuk `.secret` yang disembunyikan CSS. */
console.log(article.textContent) // "Belajar DOM bersama anmastery Teks ini disembunyikan dengan CSS."

/** 3. `innerHTML` mengembalikan isi elemen beserta tag HTML di dalamnya. */
console.log(article.innerHTML)
// "Belajar DOM bersama <strong>anmastery</strong> <span class=\"secret\">Teks ini disembunyikan dengan CSS.</span>"

/**
 * 4. Mengubah isi elemen.
 * `textContent` menampilkan string apa adanya di halaman, sedangkan `innerHTML`
 * menerjemahkan string sebagai HTML.
 */
const plainHeadline = document.querySelector(".plain-headline")
const htmlHeadline = document.querySelector(".html-headline")

plainHeadline.textContent = "<em>Teks tidak diterjemahkan</em>"
console.log(plainHeadline.textContent) // "<em>Teks tidak diterjemahkan</em>" (tampil literal sebagai teks di halaman)

htmlHeadline.innerHTML = "Halo dari <em>anmastery</em>"
console.log(htmlHeadline.innerHTML) // "Halo dari <em>anmastery</em>" (kata "anmastery" menjadi italic di halaman)

/**
 * 5. Menampilkan input pengguna secara aman.
 *
 * @param {HTMLElement} container Elemen tempat komentar ditampilkan.
 * @param {string} commentText Teks komentar dari pengguna.
 * @returns {void}
 */
function renderComment(container, commentText) {
    /** `textContent` membuat tag `<img onerror=...>` ditampilkan sebagai teks biasa, bukan dijalankan. */
    container.textContent = commentText
}

const commentPreview = document.querySelector(".comment-preview")
renderComment(commentPreview, "<img src=x onerror=alert('xss')> Komentar aman")
console.log(commentPreview.textContent) // "<img src=x onerror=alert('xss')> Komentar aman"

/**
 * 6. Latihan:
 * - Cek `innerText` milik elemen `.first`.
 * - Cek `textContent` milik elemen `.second`.
 * - Cek `innerHTML` milik elemen `.third`.
 */
const firstElement = document.querySelector(".first")
const secondElement = document.querySelector(".second")
const thirdElement = document.querySelector(".third")

console.log(firstElement.innerText) // "Elemen pertama"
console.log(secondElement.textContent) // "Elemen kedua"
console.log(thirdElement.innerHTML) // "Elemen <span class=\"special\">ketiga</span>"
