/**
 * `Object.create(proto)` membuat object baru yang mewarisi prototype secara
 * langsung dari object `proto` yang diberikan.
 *
 * Metode ini memungkinkan pewarisan berbasis prototype (prototypal inheritance)
 * tanpa perlu menulis constructor function atau class.
 */

/**
 * 1. Membuat object prototype bersama berisi method yang dapat diwarisi.
 */
const personPrototype = {
    /**
     * Mengembalikan sapaan berdasarkan properti `firstName` dan `lastName`.
     *
     * @returns {string} Kalimat perkenalan.
     */
    greet() {
        return `Halo, nama saya ${this.firstName} ${this.lastName}.`
    },
}

/** Membuat object baru yang mewarisi `personPrototype`. */
const memberOne = Object.create(personPrototype)
memberOne.firstName = "anmastery"
memberOne.lastName = "developer"

console.log(memberOne.greet()) // "Halo, nama saya anmastery developer."
console.log(Object.getPrototypeOf(memberOne) === personPrototype) // true

/**
 * 2. Menambahkan properti langsung melalui argumen kedua (property descriptors).
 */
const memberTwo = Object.create(personPrototype, {
    firstName: { value: "Raka", enumerable: true },
    lastName: { value: "Pratama", enumerable: true },
})

console.log(memberTwo.greet()) // "Halo, nama saya Raka Pratama."

/**
 * 3. `Object.create(null)` membuat dictionary murni tanpa prototype bawaan.
 * Cocok untuk lookup map agar tidak bertabrakan dengan properti bawaan seperti `toString`.
 */
const cleanDictionary = Object.create(null)
cleanDictionary.js = "JavaScript"
cleanDictionary.ts = "TypeScript"

console.log(cleanDictionary.js) // "JavaScript"
console.log(Object.getPrototypeOf(cleanDictionary)) // null
console.log("toString" in cleanDictionary) // false
