/**
 * Mengakses DOM berarti memilih (select) elemen HTML agar bisa dibaca atau
 * dimanipulasi dengan JavaScript.
 *
 * Ada lima selector utama:
 * 1. `getElementById(id)`             - satu elemen berdasarkan id (atau `null`).
 * 2. `getElementsByClassName(class)`  - HTMLCollection berdasarkan class.
 * 3. `getElementsByTagName(tag)`      - HTMLCollection berdasarkan nama tag.
 * 4. `querySelector(css)`             - elemen PERTAMA yang cocok dengan CSS selector.
 * 5. `querySelectorAll(css)`          - NodeList berisi SEMUA elemen yang cocok.
 *
 * Saran praktis: gunakan `querySelector`/`querySelectorAll` untuk kode modern
 * karena menerima CSS selector apa pun dan konsisten digunakan.
 *
 * Catatan: buka `index.html` di browser, lalu lihat hasilnya di tab Console.
 */

/**
 * 1. `getElementsByTagName()` mengembalikan HTMLCollection (mirip array).
 * HTMLCollection bersifat "live": isinya otomatis ikut berubah saat DOM berubah.
 */
const headingOnes = document.getElementsByTagName("h1")
console.log(headingOnes) // HTMLCollection [h1]
console.log(headingOnes.length) // 1

/** 2. `getElementById()` mengembalikan satu elemen, atau `null` jika id tidak ditemukan. */
const mainHeading = document.getElementById("main")
console.log(mainHeading) // <h2 id="main">getElementById</h2>
console.log(document.getElementById("tidak-ada")) // null

/** 3. `getElementsByClassName()` mengembalikan HTMLCollection berdasarkan nama class (tanpa titik). */
const classElements = document.getElementsByClassName("cls")
console.log(classElements) // HTMLCollection [h3.cls]

/** 4. `querySelector()` menerima CSS selector dan mengembalikan elemen pertama yang cocok. */
const firstMatch = document.querySelector("#id-1")
console.log(firstMatch) // <h4 class="cls-1" id="id-1">querySelector</h4>

/**
 * 5. `querySelectorAll()` mengembalikan NodeList statis.
 * Berbeda dengan HTMLCollection, NodeList mendukung `forEach()` secara langsung.
 */
const numberItems = document.querySelectorAll(".numbers li")
console.log(numberItems) // NodeList(4) [li, li, li, li]

numberItems.forEach((item) => {
    console.log(item.textContent) // "1", "2", "3", "4"
})

/**
 * 6. HTMLCollection tidak memiliki `forEach()` atau `map()`.
 * Ubah dulu menjadi array menggunakan `Array.from()` atau spread operator.
 */
const headingTexts = Array.from(classElements).map((element) => element.textContent)
console.log(headingTexts) // ["getElementsByClassName"]

/**
 * 7. Latihan: pilih elemen pada bagian `.exercise`.
 * - Elemen `h4` bertuliskan "Red" dengan `getElementsByTagName`.
 * - Elemen class `green` dengan `getElementsByClassName`.
 * - Elemen id `blue` dengan `getElementById`.
 * - Elemen dengan class dan id `yellow` dengan `querySelector`.
 * - Semua elemen class `teal` dengan `querySelectorAll`.
 */
const exerciseSection = document.querySelector(".exercise")

/** Memanggil selector dari elemen (bukan `document`) membatasi pencarian hanya di dalamnya. */
const [redHeading] = exerciseSection.getElementsByTagName("h4")
const [greenBox] = document.getElementsByClassName("green")
const blueBox = document.getElementById("blue")
const yellowBox = document.querySelector(".yellow#yellow")
const tealBoxes = document.querySelectorAll(".teal")

console.log(redHeading.textContent) // "Red"
console.log(greenBox.textContent) // "Green"
console.log(blueBox.textContent) // "Blue"
console.log(yellowBox.textContent) // "Yellow"
console.log(tealBoxes.length) // 5
