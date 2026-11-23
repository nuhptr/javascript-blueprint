/**
 * Property `style` digunakan untuk membaca dan mengubah inline style
 * (atribut `style="..."`) sebuah elemen langsung dari JavaScript.
 *
 * Hal penting yang perlu diingat:
 * 1. Nama property CSS ditulis camelCase: `background-color` menjadi `backgroundColor`.
 * 2. `element.style` hanya membaca inline style, bukan style dari file/tag CSS.
 * 3. Untuk membaca style akhir yang benar-benar tampil, gunakan `getComputedStyle()`.
 * 4. Jika perlu mengubah banyak style sekaligus, lebih rapi menggunakan `classList`.
 *
 * Catatan: buka `index.html` di browser, lalu lihat hasilnya di tab Console.
 */

const title = document.querySelector(".title")

/** 1. `style` hanya berisi inline style. Warna crimson dari tag `<style>` tidak terbaca di sini. */
console.log(title.style.color) // "teal"
console.log(title.style.fontSize) // "" (tidak ada inline font-size)

/** 2. `getComputedStyle()` membaca style akhir dari semua sumber CSS. */
console.log(getComputedStyle(title).fontSize) // "32px"

/** 3. Mengubah style menggunakan nama property camelCase. */
title.style.color = "skyblue"
title.style.backgroundColor = "#222"
title.style.padding = "8px 12px"

console.log(title.style.backgroundColor) // "rgb(34, 34, 34)"

/** 4. Mengisi string kosong menghapus inline style, sehingga style dari CSS berlaku lagi. */
title.style.padding = ""
console.log(title.style.padding) // ""

/**
 * 5. Latihan:
 * - Beri tinggi "400px" dan background "teal" pada `.container`.
 * - Ubah warna `.main-heading` menjadi "skyblue".
 * - Ubah font `.sub-heading` menjadi "sans-serif" dan warnanya menjadi "white".
 * - Ubah warna `.learn-more` menjadi "pink".
 */
const container = document.querySelector(".container")
const mainHeading = document.querySelector(".main-heading")
const subHeading = document.querySelector(".sub-heading")
const learnMoreLink = document.querySelector(".learn-more")

/**
 * Menerapkan beberapa style sekaligus ke sebuah elemen.
 *
 * @param {HTMLElement} element Elemen yang akan diberi style.
 * @param {Partial<CSSStyleDeclaration>} styles Object berisi property CSS dalam camelCase.
 * @returns {void}
 */
function applyStyles(element, styles) {
    Object.assign(element.style, styles)
}

applyStyles(container, {
    height: "400px",
    background: "teal",
})
applyStyles(mainHeading, {
    color: "skyblue",
})
applyStyles(subHeading, {
    fontFamily: "sans-serif",
    color: "white",
})
applyStyles(learnMoreLink, {
    color: "pink",
})

console.log(container.style.height) // "400px"
console.log(subHeading.style.fontFamily) // "sans-serif"
