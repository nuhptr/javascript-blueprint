/**
 * Prototype model adalah mekanisme pewarisan inti di JavaScript.
 * Setiap object memiliki tautan internal `[[Prototype]]` ke object lain.
 *
 * Saat properti atau method diakses pada sebuah object dan tidak ditemukan
 * secara langsung, JavaScript mencarinya menyusuri rantai prototype (prototype chain)
 * hingga mencapai `null`.
 */

/**
 * 1. Constructor function `User` dengan method bersama di `User.prototype`.
 *
 * @constructor
 * @param {string} username Nama akun pengguna.
 * @param {string} email Alamat email pengguna.
 */
function User(username, email) {
    this.username = username
    this.email = email
}

/**
 * Menambahkan method ke prototype agar semua instance berbagi referensi
 * fungsi yang sama tanpa menduplikasinya di setiap object.
 *
 * @returns {string} Label profil pengguna.
 */
User.prototype.getLabel = function () {
    return `${this.username} <${this.email}>`
}

const userOne = new User("anmastery", "anmastery@example.com")
const userTwo = new User("sari", "sari@example.com")

console.log(userOne.getLabel()) // "anmastery <anmastery@example.com>"
console.log(userTwo.getLabel()) // "sari <sari@example.com>"

/** Kedua instance berbagi method `getLabel` yang persis sama di memori. */
console.log(userOne.getLabel === userTwo.getLabel) // true

/**
 * 2. Memeriksa rantai prototype dan membedakan properti sendiri vs properti warisan.
 */
console.log(Object.getPrototypeOf(userOne) === User.prototype) // true
console.log(Object.hasOwn(userOne, "username")) // true
console.log(Object.hasOwn(userOne, "getLabel")) // false
console.log("getLabel" in userOne) // true
