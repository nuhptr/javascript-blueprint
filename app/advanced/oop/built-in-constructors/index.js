/**
 * Built-in constructors adalah fungsi constructor bawaan JavaScript untuk
 * membuat tipe data maupun object standar seperti `Number`, `String`,
 * `Boolean`, `Array`, `Object`, `Date`, dan `RegExp`.
 *
 * Catatan praktik terbaik: untuk tipe primitif, array, dan object biasa,
 * gunakan sintaks literal (`"text"`, `42`, `[]`, `{}`) daripada `new ...()`
 * karena lebih cepat, ringkas, dan menghindari jebakan perbandingan tipe.
 */

/**
 * 1. Wrapper object primitif (`new String`, `new Number`, `new Boolean`).
 * Memanggilnya dengan `new` menghasilkan tipe `"object"`, bukan primitif.
 */
const numberObject = new Number(10)
const stringObject = new String("anmastery")
const booleanObject = new Boolean(false)

console.log(typeof numberObject, numberObject.valueOf()) // "object" 10
console.log(typeof stringObject, stringObject.valueOf()) // "object" "anmastery"
console.log(typeof booleanObject, booleanObject.valueOf()) // "object" false

/** Jebakan perbandingan ketat antara primitif dan wrapper object. */
console.log(numberObject === 10) // false
console.log(Boolean(booleanObject)) // true (object selalu truthy meski isinya false!)

/**
 * 2. Built-in constructors yang umum dipakai untuk kebutuhan spesifik (`Date`, `RegExp`).
 */
const releaseDate = new Date("2026-01-01T00:00:00.000Z")
const emailPattern = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")

console.log(releaseDate.getUTCFullYear()) // 2026
console.log(emailPattern.test("hello@anmastery.dev")) // true

/**
 * 3. Perbandingan gaya literal (disarankan) vs constructor untuk Array & Object.
 */
const skillsLiteral = ["JavaScript", "Node.js"]
const skillsConstructor = new Array("JavaScript", "Node.js")

console.log(skillsLiteral) // ["JavaScript", "Node.js"]
console.log(skillsConstructor) // ["JavaScript", "Node.js"]
console.log(Array.isArray(skillsLiteral) && Array.isArray(skillsConstructor)) // true
