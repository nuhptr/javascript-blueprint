/**
 * Prototypal inheritance memungkinkan sebuah constructor function (child)
 * mewarisi properti dan method dari constructor function lain (parent)
 * melalui rantai prototype.
 *
 * Pola ini adalah fondasi di balik sintaks `extends` dan `super` pada ES6 Classes.
 */

/**
 * 1. Constructor induk `Animal`.
 *
 * @constructor
 * @param {string} name Nama hewan.
 */
function Animal(name) {
    this.name = name
}

/**
 * Method suara umum milik `Animal`.
 *
 * @returns {string} Suara default hewan.
 */
Animal.prototype.sound = function () {
    return `${this.name} mengeluarkan suara.`
}

/**
 * 2. Constructor turunan `Dog` yang mewarisi `Animal`.
 * `Animal.call(this, name)` menyalin inisialisasi properti dari `Animal`.
 *
 * @constructor
 * @param {string} name Nama anjing.
 * @param {string} breed Ras anjing.
 */
function Dog(name, breed) {
    Animal.call(this, name)
    this.breed = breed
}

/** Hubungkan prototype `Dog` ke prototype `Animal` menggunakan `Object.create()`. */
Dog.prototype = Object.create(Animal.prototype)

/** Kembalikan referensi `constructor` agar tetap menunjuk ke `Dog`. */
Dog.prototype.constructor = Dog

/**
 * Override method `sound()` khusus untuk `Dog`.
 *
 * @returns {string} Suara gonggongan anjing.
 */
Dog.prototype.sound = function () {
    return `${this.name} (${this.breed}) menggonggong: Woof!`
}

/**
 * Method tambahan khusus milik `Dog`.
 *
 * @param {string} item Benda yang diambil.
 * @returns {string} Pesan aksi mengambil benda.
 */
Dog.prototype.fetch = function (item) {
    return `${this.name} mengambil ${item}.`
}

const buddy = new Dog("Buddy", "Golden Retriever")

console.log(buddy.sound()) // "Buddy (Golden Retriever) menggonggong: Woof!"
console.log(buddy.fetch("bola")) // "Buddy mengambil bola."
console.log(buddy instanceof Dog) // true
console.log(buddy instanceof Animal) // true
