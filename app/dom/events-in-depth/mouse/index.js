/**
 * Mouse events menangani interaksi kursor dan tombol mouse pada elemen HTML.
 *
 * Event mouse yang umum digunakan:
 * - `click`, `dblclick`, `contextmenu` (klik kanan)
 * - `mousedown`, `mouseup`, `mousemove`
 * - `mouseenter` / `mouseleave` (tidak bubbling ke child)
 * - `mouseover` / `mouseout` (tetap bubbling ke child)
 *
 * Catatan: buka `index.html` di browser, lalu coba interaksi tiap baris.
 */

/** Daftar pasangan selector CSS dan class warna yang di-toggle saat event aktif. */
const mouseEventDemos = [
    { selector: ".click", eventName: "click", activeClass: "red" },
    { selector: ".contextmenu", eventName: "contextmenu", activeClass: "blue" },
    { selector: ".dblclick", eventName: "dblclick", activeClass: "teal" },
    { selector: ".mousedown", eventName: "mousedown", activeClass: "steelblue" },
    { selector: ".mouseenter", eventName: "mouseenter", activeClass: "orange" },
    { selector: ".mouseleave", eventName: "mouseleave", activeClass: "purple" },
    { selector: ".mousemove", eventName: "mousemove", activeClass: "pink" },
    { selector: ".mouseout", eventName: "mouseout", activeClass: "crimson" },
    { selector: ".mouseover", eventName: "mouseover", activeClass: "chocolate" },
    { selector: ".mouseup", eventName: "mouseup", activeClass: "aqua" },
]

/**
 * Mendaftarkan listener mouse event ke elemen target secara seragam.
 *
 * @param {string} selector CSS selector elemen target.
 * @param {string} eventName Nama event mouse (mis. "click").
 * @param {string} activeClass Nama class CSS yang di-toggle saat event terjadi.
 * @returns {void}
 */
function registerMouseDemo(selector, eventName, activeClass) {
    const element = document.querySelector(selector)

    element.addEventListener(eventName, (event) => {
        if (eventName === "contextmenu") event.preventDefault()

        element.classList.toggle(activeClass)
        console.log(`${eventName} aktif -> class "${activeClass}"`)
    })
}

mouseEventDemos.forEach(({ selector, eventName, activeClass }) => {
    registerMouseDemo(selector, eventName, activeClass)
})
