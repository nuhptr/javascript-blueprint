/**
 * Selain mengubah elemen yang sudah ada, JavaScript dapat membuat elemen baru,
 * menyisipkannya ke halaman, dan menghapus elemen yang tidak dibutuhkan.
 *
 * Method yang dibahas:
 * 1. `document.createElement(tag)`         - membuat elemen baru (belum tampil).
 * 2. `append()` / `appendChild()`          - menambahkan di akhir parent.
 * 3. `prepend()`                           - menambahkan di awal parent.
 * 4. `insertBefore(newNode, referenceNode)` - menyisipkan sebelum elemen tertentu.
 * 5. `insertAdjacentElement(position, el)` - menyisipkan relatif terhadap elemen.
 * 6. `removeChild(child)` / `remove()`     - menghapus elemen.
 *
 * Penting: satu elemen hanya bisa berada di satu tempat. Menyisipkan elemen
 * yang sama ke tempat lain akan MEMINDAHKANNYA, bukan menyalinnya.
 *
 * Catatan: buka `index.html` di browser, lalu lihat hasilnya di tab Console.
 */

/**
 * Membuat elemen baru beserta teks dan class opsional.
 *
 * @param {string} tagName Nama tag HTML, mis. "li" atau "span".
 * @param {string} text Teks yang ditampilkan di dalam elemen.
 * @param {string} [className=""] Class CSS opsional.
 * @returns {HTMLElement} Elemen baru yang belum tersisip ke halaman.
 */
function createElementWithText(tagName, text, className = "") {
    const element = document.createElement(tagName)
    element.textContent = text

    if (className !== "") element.classList.add(className)

    return element
}

const numberList = document.querySelector(".number-list")

/** 1. `createElement()` hanya membuat elemen di memori; elemen belum punya parent. */
const lastItem = createElementWithText("li", "4 (append)", "special")
console.log(lastItem.parentElement) // null

/** 2. `append()` menambahkan di akhir dan bisa menerima beberapa elemen atau string sekaligus. */
numberList.append(lastItem, createElementWithText("li", "5 (append)"))
console.log(numberList.lastElementChild.textContent) // "5 (append)"

/** `appendChild()` adalah versi lama: hanya menerima satu node dan mengembalikan node tersebut. */
const appendedItem = numberList.appendChild(createElementWithText("li", "6 (appendChild)"))
console.log(appendedItem.textContent) // "6 (appendChild)"

/** 3. `prepend()` menambahkan di awal parent. */
numberList.prepend(createElementWithText("li", "0 (prepend)"))
console.log(numberList.firstElementChild.textContent) // "0 (prepend)"

/** 4. `insertBefore(newNode, referenceNode)` menyisipkan tepat sebelum elemen acuan. */
const thirdItem = numberList.children[2]
numberList.insertBefore(createElementWithText("li", "1.5 (insertBefore)"), thirdItem)
console.log(thirdItem.previousElementSibling.textContent) // "1.5 (insertBefore)"

/**
 * 5. `insertAdjacentElement(position, element)` memiliki empat posisi:
 * - "beforebegin" : sebelum elemen target (di luar).
 * - "afterbegin"  : di dalam target, sebagai child pertama.
 * - "beforeend"   : di dalam target, sebagai child terakhir.
 * - "afterend"    : setelah elemen target (di luar).
 */
const targetParagraph = document.querySelector(".target")
const positions = ["beforebegin", "afterbegin", "beforeend", "afterend"]

positions.forEach((position) => {
    const label = createElementWithText("span", ` [${position}] `, "special")
    targetParagraph.insertAdjacentElement(position, label)
})

console.log(targetParagraph.outerHTML)
// "<p class=\"target\"><span ...> [afterbegin] </span>Paragraf target<span ...> [beforeend] </span></p>"

/** 6. Memindahkan elemen: menyisipkan elemen yang sudah ada akan memindahkannya. */
const oldList = document.querySelector(".old-list")
const movedItem = numberList.firstElementChild
oldList.append(movedItem)
console.log(numberList.firstElementChild.textContent) // "1"
console.log(movedItem.parentElement === oldList) // true

/** 7. `removeChild()` menghapus child melalui parent-nya dan mengembalikan elemen yang dihapus. */
const oldItem = document.querySelector(".old-item")
const removedItem = oldList.removeChild(oldItem)
console.log(removedItem.textContent) // "Item lama"

/** 8. `remove()` lebih ringkas: elemen menghapus dirinya sendiri tanpa perlu parent. */
const goodbyeHeading = document.querySelector(".goodbye")
goodbyeHeading.remove()
console.log(document.querySelector(".goodbye")) // null
