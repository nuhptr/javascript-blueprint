/**
 * Rename destructuring (aliasing) memungkinkan kita mengganti nama variabel hasil
 * ekstraksi properti object menggunakan sintaks `{ propertyName: newVariableName }`.
 *
 * Teknik ini berguna untuk menghindari bentrokan nama variabel atau membuat nama
 * variabel yang lebih deskriptif sesuai konteks.
 */

/**
 * 1. Mengganti nama properti `x` dan `y` menjadi variabel yang lebih deskriptif.
 */
const coordinates = { x: 100, y: 200 }
const { x: horizontalPos, y: verticalPos } = coordinates

console.log(horizontalPos) // 100
console.log(verticalPos) // 200

/**
 * 2. Menggabungkan rename dengan nilai default.
 * Nilai default akan dipakai jika properti tidak ditemukan pada object sumber.
 */
const dimensions = { width: 640 }
const { width: boxWidth = 100, height: boxHeight = 200 } = dimensions

console.log(boxWidth, boxHeight) // 640 200

/**
 * 3. Destructuring assignment pada variabel yang sudah dideklarasikan sebelumnya.
 * Tanda kurung `(...)` wajib digunakan agar JavaScript tidak menganggap `{ ... }`
 * sebagai blok kode.
 */
let studentName
let division
;({ name: studentName, division } = { name: "anmastery", division: "First" })

console.log(studentName) // "anmastery"
console.log(division) // "First"

/**
 * 4. Menggabungkan rename destructuring dengan rest operator (`...`).
 */
const { a: firstValue, b: secondValue, ...remainingValues } = {
    a: 100,
    b: 200,
    c: 300,
    d: 400,
    e: 500,
}

console.log(firstValue, secondValue) // 100 200
console.log(remainingValues) // { c: 300, d: 400, e: 500 }

/**
 * 5. Latihan: mengekstrak `name`, `age`, dan `country` ke variabel
 * `personName`, `personAge`, dan `personCountry`.
 */
const person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    country: "USA",
}

const { name: personName, age: personAge, country: personCountry } = person
console.log(personName) // "John Doe"
console.log(personAge) // 30
console.log(personCountry) // "USA"
