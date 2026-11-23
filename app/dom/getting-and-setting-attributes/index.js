/**
 * Atribut HTML (seperti `href`, `type`, `value`, `placeholder`) bisa dibaca
 * dan diubah dengan dua cara:
 *
 * 1. Property DOM  - `element.href`, `input.value`, `input.type`.
 * 2. Method atribut - `getAttribute()`, `setAttribute()`, `hasAttribute()`,
 *    dan `removeAttribute()`.
 *
 * Perbedaan penting: property menunjukkan nilai SAAT INI, sedangkan
 * `getAttribute()` menunjukkan nilai yang tertulis di HTML.
 * Untuk atribut kustom `data-*`, gunakan `element.dataset`.
 *
 * Catatan: buka `index.html` di browser, lalu lihat hasilnya di tab Console.
 */

const profileLink = document.querySelector(".profile-link")
const emailInput = document.querySelector(".email-input")

/** 1. Membaca atribut melalui property DOM. */
console.log(profileLink.href) // "https://github.com/" (URL lengkap yang sudah dinormalisasi)
console.log(emailInput.value) // "anmastery@example.com"
console.log(emailInput.type) // "text"

/** 2. Mengubah atribut melalui property DOM. */
profileLink.href = "https://github.com/nuhptr/javascript-blueprint"
emailInput.type = "email"
emailInput.placeholder = "Masukkan email kamu"

console.log(profileLink.href) // "https://github.com/nuhptr/javascript-blueprint"
console.log(emailInput.type) // "email"

/** 3. `getAttribute()` dan `setAttribute()` bekerja langsung dengan atribut HTML. */
emailInput.setAttribute("placeholder", "Email")
console.log(emailInput.getAttribute("placeholder")) // "Email"

/**
 * 4. Property vs atribut pada `value`.
 * Mengubah `input.value` tidak mengubah atribut `value` di HTML.
 */
emailInput.value = "baru@example.com"
console.log(emailInput.value) // "baru@example.com" (nilai saat ini)
console.log(emailInput.getAttribute("value")) // "anmastery@example.com" (nilai awal di HTML)

/** 5. `hasAttribute()` dan `removeAttribute()`. */
emailInput.setAttribute("disabled", "")
console.log(emailInput.hasAttribute("disabled")) // true

emailInput.removeAttribute("disabled")
console.log(emailInput.hasAttribute("disabled")) // false

/**
 * 6. Atribut kustom `data-*` dibaca lewat `dataset`.
 * Nama kebab-case (`data-user-id`) otomatis menjadi camelCase (`userId`).
 */
const saveButton = document.querySelector(".save-button")
console.log(saveButton.dataset.userId) // "42"
console.log(saveButton.dataset.role) // "admin"

saveButton.dataset.status = "ready"
console.log(saveButton.getAttribute("data-status")) // "ready"

/**
 * 7. Latihan:
 * - Pilih `.link-one`, lalu cek atribut `href` dengan `getAttribute()`.
 * - Pilih `.link-two`, lalu tambahkan atribut `href` dengan `setAttribute()`.
 */
const linkOne = document.querySelector(".link-one")
console.log(linkOne.getAttribute("href")) // "https://developer.mozilla.org"

const linkTwo = document.querySelector(".link-two")
console.log(linkTwo.hasAttribute("href")) // false

linkTwo.setAttribute("href", "https://github.com/nuhptr/javascript-blueprint")
console.log(linkTwo.getAttribute("href")) // "https://github.com/nuhptr/javascript-blueprint"
