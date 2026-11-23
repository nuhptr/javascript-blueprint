/**
 * DOM traversal adalah cara berpindah dari satu elemen ke elemen lain yang
 * berhubungan, tanpa perlu memanggil `querySelector()` berulang kali.
 *
 * Hubungan yang dibahas:
 * 1. Parent   - `parentElement` (elemen pembungkus).
 * 2. Children - `children`, `firstElementChild`, `lastElementChild`.
 * 3. Siblings - `nextElementSibling` dan `previousElementSibling` (elemen setingkat).
 *
 * Gunakan versi "Element" (`nextElementSibling`, bukan `nextSibling`) karena
 * versi tanpa "Element" juga menghitung text node seperti spasi dan baris baru.
 *
 * Catatan: buka `index.html` di browser, lalu lihat hasilnya di tab Console.
 */

const firstItem = document.querySelector(".fruit-list li")

/** 1. Naik ke parent. Setelah `<html>`, parent-nya adalah `null`. */
console.log(firstItem.parentElement) // <ul class="fruit-list">
console.log(firstItem.parentElement.parentElement) // <body>
console.log(firstItem.parentElement.parentElement.parentElement) // <html>
console.log(document.documentElement.parentElement) // null

/** 2. Turun ke children. `children` hanya berisi elemen (tanpa text node). */
const fruitList = document.querySelector(".fruit-list")
console.log(fruitList.children) // HTMLCollection(4) [li, li, li, li.fourth]
console.log(fruitList.children[2].textContent) // "Orange"
console.log(fruitList.firstElementChild.textContent) // "Mango"
console.log(fruitList.lastElementChild.textContent) // "Grape"

/** Mengubah child tertentu melalui index. */
fruitList.children[2].textContent = "Apple"
console.log(fruitList.children[2].textContent) // "Apple"

/** 3. Bergerak ke sibling berikutnya. */
console.log(firstItem.nextElementSibling.textContent) // "Banana"
console.log(firstItem.nextElementSibling.nextElementSibling.textContent) // "Apple"

/** 4. Bergerak ke sibling sebelumnya. */
const fourthItem = document.querySelector(".fourth")
console.log(fourthItem.previousElementSibling.textContent) // "Apple"
console.log(fourthItem.previousElementSibling.previousElementSibling.textContent) // "Banana"

/** 5. Sibling setelah elemen terakhir adalah `null`; optional chaining (`?.`) mencegah error. */
console.log(fourthItem.nextElementSibling) // null
console.log(fourthItem.nextElementSibling?.textContent) // undefined

/** 6. `nextSibling` (tanpa "Element") mengembalikan text node berisi spasi/baris baru. */
console.log(firstItem.nextSibling.nodeName) // "#text"

/**
 * 7. Contoh praktis: mengumpulkan semua sibling milik sebuah elemen.
 *
 * @param {Element} element Elemen acuan.
 * @returns {Element[]} Semua elemen setingkat, tidak termasuk elemen acuan.
 */
function getSiblings(element) {
    return [...element.parentElement.children].filter((child) => child !== element)
}

console.log(getSiblings(fourthItem).map((item) => item.textContent)) // ["Mango", "Banana", "Apple"]
