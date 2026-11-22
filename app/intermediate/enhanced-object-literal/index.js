/**
 * Enhanced Object Literal adalah sintaks ES6 yang membuat penulisan
 * property dan method di dalam object menjadi lebih ringkas.
 */

/** Property shorthand: nama property sama dengan nama variabel. */
const a = 1
const b = 2
const c = 3

const obj = { a, b, c }

/** Output: { a: 1, b: 2, c: 3 }. */
console.log(obj)

/**
 * Method shorthand memungkinkan method ditulis tanpa kata kunci function.
 *
 * Contoh lama: sum: function (a, b) { return a + b }
 * Contoh ES6 : sum(a, b) { return a + b }
 */
const calculator = {
    sum(a, b) {
        return a + b
    },
    multiply(a, b) {
        return a * b
    },
}

/** Output: 5 dan 6. */
console.log(calculator.sum(2, 3))
console.log(calculator.multiply(2, 3))

/**
 * Fungsi mengembalikan object yang terdiri dari property shorthand.
 *
 * @param {string} name Nama orang.
 * @param {number} age Umur orang.
 * @param {number} height Tinggi orang dalam centimeter.
 * @returns {{name: string, age: number, height: number}} Data orang.
 */
function getPerson(name, age, height) {
    return { name, age, height }
}

/** Penyederhanaan dari: { name: name, age: age, height: height }. */
const person = getPerson("Zachary", 23, 195)

/** Output: { name: 'Zachary', age: 23, height: 195 }. */
console.log(person)