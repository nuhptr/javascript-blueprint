/**
 * Rest operator (`...`) mengumpulkan sisa argumen fungsi atau sisa elemen/properti
 * saat destructuring ke dalam satu array atau object.
 *
 * Berbeda dengan spread operator yang memecah data, rest operator menggabungkan
 * beberapa nilai yang tersisa menjadi satu struktur data.
 */

/**
 * 1. Menerima jumlah argumen yang tidak terbatas (variadic function).
 * Seluruh argumen yang dikirim akan dikumpulkan ke dalam array `userData`.
 *
 * @param {...*} userData Daftar data user dengan jumlah argumen bebas.
 * @returns {Array<*>} Array yang berisi semua argumen yang diterima.
 */
function collectUserData(...userData) {
    return userData
}

console.log(collectUserData("anmastery", 17, "Male", "Programming")) // ["anmastery", 17, "Male", "Programming"]

/**
 * 2. Rest parameter pada arrow function.
 * Mengalikan setiap angka yang diberikan dengan 2.
 *
 * @param {...number} numbers Deretan angka yang akan dikalikan dua.
 * @returns {number[]} Array baru berisi hasil perkalian tiap angka dengan 2.
 */
const doubleNumbers = (...numbers) => numbers.map((num) => num * 2)

console.log(doubleNumbers(1, 2, 3, 4, 5)) // [2, 4, 6, 8, 10]

/**
 * 3. Menggabungkan parameter biasa dengan rest parameter.
 * Aturan penting: rest parameter harus selalu diletakkan di posisi paling akhir.
 *
 * @param {string} firstName Nama depan.
 * @param {string} lastName Nama belakang.
 * @param {...string} hobbies Daftar hobi yang tersisa sebagai array.
 * @returns {{ fullName: string, hobbies: string[] }} Ringkasan data personal.
 */
function createPersonProfile(firstName, lastName, ...hobbies) {
    return {
        fullName: `${firstName} ${lastName}`,
        hobbies,
    }
}

const personProfile = createPersonProfile(
    "anmastery",
    "developer",
    "programming",
    "football",
)
console.log(personProfile) // { fullName: "anmastery developer", hobbies: ["programming", "football"] }

/**
 * 4. Latihan praktis: menjumlahkan seluruh angka yang diberikan.
 * Memberikan nilai awal 0 pada reduce() memastikan fungsi tetap aman
 * saat dipanggil tanpa argumen.
 *
 * @param {...number} numbers Daftar angka yang akan dijumlahkan.
 * @returns {number} Total penjumlahan seluruh angka (0 jika tanpa argumen).
 */
function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0)
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(1, 2, 3, 4)) // 10
console.log(sum()) // 0

/**
 * 5. Rest operator dalam destructuring array dan object.
 * Digunakan untuk mengambil sebagian nilai dan mengumpulkan sisanya.
 */
const [primaryColor, secondaryColor, ...otherColors] = [
    "red",
    "green",
    "blue",
    "yellow",
]
console.log(primaryColor, secondaryColor) // "red" "green"
console.log(otherColors) // ["blue", "yellow"]

const { name, ...otherDetails } = {
    name: "Jen",
    age: 22,
    role: "developer",
}
console.log(name) // "Jen"
console.log(otherDetails) // { age: 22, role: "developer" }
