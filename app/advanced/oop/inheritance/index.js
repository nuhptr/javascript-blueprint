/**
 * Inheritance (pewarisan) memungkinkan sebuah class turunan (subclass/child)
 * mewarisi properti dan method dari class induk (superclass/parent) menggunakan
 * kata kunci `extends` dan `super`.
 *
 * Pewarisan mengurangi duplikasi kode dan membantu memodelkan relasi "is-a"
 * (contoh: Developer adalah Employee).
 */

/**
 * Class induk `Employee`.
 */
class Employee {
    /**
     * Membuat data karyawan dasar.
     *
     * @param {string} name Nama karyawan.
     * @param {string} department Departemen tempat bekerja.
     */
    constructor(name, department) {
        this.name = name
        this.department = department
    }

    /**
     * Mengembalikan informasi dasar karyawan.
     *
     * @returns {string} Deskripsi karyawan.
     */
    getDetails() {
        return `${this.name} bekerja di departemen ${this.department}.`
    }
}

/**
 * Subclass `Developer` yang mewarisi `Employee` dan menambah keahlian bahasa pemrograman.
 */
class Developer extends Employee {
    /**
     * Membuat data developer.
     *
     * @param {string} name Nama developer.
     * @param {string} department Departemen.
     * @param {string} primaryLanguage Bahasa pemrograman utama.
     */
    constructor(name, department, primaryLanguage) {
        super(name, department)
        this.primaryLanguage = primaryLanguage
    }

    /**
     * Memperluas method `getDetails()` dari class induk dengan `super.getDetails()`.
     *
     * @returns {string} Deskripsi lengkap developer.
     */
    getDetails() {
        return `${super.getDetails()} Bahasa utama: ${this.primaryLanguage}.`
    }

    /**
     * Method khusus milik `Developer`.
     *
     * @param {string} featureName Nama fitur yang dikerjakan.
     * @returns {string} Status pengerjaan fitur.
     */
    buildFeature(featureName) {
        return `${this.name} sedang membangun fitur "${featureName}".`
    }
}

const leadDev = new Developer("anmastery", "Engineering", "JavaScript")

console.log(leadDev.getDetails())
// "anmastery bekerja di departemen Engineering. Bahasa utama: JavaScript."
console.log(leadDev.buildFeature("Authentication"))
// "anmastery sedang membangun fitur \"Authentication\"."
console.log(leadDev instanceof Developer) // true
console.log(leadDev instanceof Employee) // true
