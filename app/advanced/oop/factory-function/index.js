/**
 * Factory function adalah fungsi biasa yang membuat dan mengembalikan object baru
 * tanpa menggunakan kata kunci `new` atau `class`.
 *
 * Pola ini berguna untuk membuat banyak object dengan struktur serupa sekaligus
 * mendukung data privat secara alami melalui closure.
 */

/**
 * 1. Membuat object user menggunakan factory function.
 *
 * @param {string} firstName Nama depan.
 * @param {string} lastName Nama belakang.
 * @param {string} programmingLanguage Bahasa pemrograman utama.
 * @returns {object} Object user beserta method perkenalannya.
 */
function createDeveloper(firstName, lastName, programmingLanguage) {
    return {
        firstName,
        lastName,
        programmingLanguage,
        /**
         * Mengembalikan ringkasan profil developer.
         *
         * @returns {string} Kalimat profil developer.
         */
        describe() {
            return `${this.firstName} ${this.lastName} menulis kode dengan ${this.programmingLanguage}.`
        },
    }
}

const devOne = createDeveloper("anmastery", "developer", "JavaScript")
const devTwo = createDeveloper("Nadia", "Putri", "TypeScript")

console.log(devOne.describe()) // "anmastery developer menulis kode dengan JavaScript."
console.log(devTwo.describe()) // "Nadia Putri menulis kode dengan TypeScript."

/**
 * 2. Factory function untuk membuat object kendaraan dengan validasi sederhana.
 *
 * @param {string} brand Merek kendaraan.
 * @param {string} model Model kendaraan.
 * @param {number} year Tahun produksi.
 * @returns {object} Object kendaraan dengan method status.
 */
function createVehicle(brand, model, year) {
    return {
        brand,
        model,
        year,
        /**
         * Menampilkan label lengkap kendaraan.
         *
         * @returns {string} Nama merek, model, dan tahun kendaraan.
         */
        getInfo() {
            return `${this.brand} ${this.model} (${this.year})`
        },
    }
}

const car = createVehicle("Toyota", "Corolla", 2024)
console.log(car.getInfo()) // "Toyota Corolla (2024)"
