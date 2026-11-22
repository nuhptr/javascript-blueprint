/**
 * Constructor function adalah fungsi dengan konvensi nama PascalCase yang dipanggil
 * bersama kata kunci `new` untuk membuat instance object baru.
 *
 * Saat dipanggil dengan `new`, JavaScript otomatis:
 * 1. Membuat object kosong baru.
 * 2. Menghubungkan prototype object baru ke `Constructor.prototype`.
 * 3. Mengikat `this` ke object baru tersebut.
 * 4. Mengembalikan object baru secara otomatis.
 */

/**
 * 1. Constructor function untuk membuat instance `Person`.
 *
 * @constructor
 * @param {string} firstName Nama depan.
 * @param {string} lastName Nama belakang.
 * @param {string} role Peran atau profesi.
 */
function Person(firstName, lastName, role) {
    this.firstName = firstName
    this.lastName = lastName
    this.role = role
}

/**
 * Method diletakkan di prototype agar semua instance berbagi satu fungsi
 * yang sama di memori.
 *
 * @returns {string} Ringkasan nama lengkap dan peran.
 */
Person.prototype.getProfile = function () {
    return `${this.firstName} ${this.lastName} - ${this.role}`
}

const creator = new Person("anmastery", "developer", "Software Engineer")
const student = new Person("Budi", "Santoso", "Frontend Learner")

console.log(creator.getProfile()) // "anmastery developer - Software Engineer"
console.log(student.getProfile()) // "Budi Santoso - Frontend Learner"
console.log(creator instanceof Person) // true

/**
 * 2. Constructor function untuk data buku.
 *
 * @constructor
 * @param {string} title Judul buku.
 * @param {string} author Penulis buku.
 * @param {number} year Tahun terbit.
 */
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
}

/**
 * Mengembalikan informasi singkat buku.
 *
 * @returns {string} Ringkasan judul, penulis, dan tahun terbit.
 */
Book.prototype.getSummary = function () {
    return `"${this.title}" oleh ${this.author} (${this.year})`
}

const jsBook = new Book("JavaScript Blueprint", "anmastery", 2026)
console.log(jsBook.getSummary()) // "\"JavaScript Blueprint\" oleh anmastery (2026)"
