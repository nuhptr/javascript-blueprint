/**
 * Kata kunci `this` merujuk pada konteks object yang sedang mengeksekusi
 * sebuah fungsi atau method. Nilai `this` ditentukan saat fungsi dipanggil
 * (kecuali pada arrow function yang mewarisi `this` dari lexical scope-nya).
 */

/**
 * 1. `this` di dalam method object.
 * Pada regular function yang dipanggil sebagai method, `this` merujuk
 * ke object pemilik method tersebut.
 */
const developer = {
    name: "anmastery",
    role: "Full-Stack Developer",
    /**
     * Mengembalikan perkenalan singkat menggunakan properti object sendiri.
     *
     * @returns {string} Kalimat perkenalan developer.
     */
    introduce() {
        return `Halo, saya ${this.name} (${this.role}).`
    },
}

console.log(developer.introduce()) // "Halo, saya anmastery (Full-Stack Developer)."

/**
 * 2. Perbedaan `this` pada regular function vs arrow function.
 * Arrow function tidak memiliki `this` sendiri, sehingga sangat cocok
 * untuk callback di dalam method agar tetap merujuk ke object yang sama.
 */
const team = {
    name: "anmastery team",
    members: ["Rina", "Budi", "Sari"],
    /**
     * Membuat daftar label anggota tim dengan lexical `this` dari arrow function.
     *
     * @returns {string[]} Daftar anggota beserta nama timnya.
     */
    listMembers() {
        return this.members.map((member) => `${member} - ${this.name}`)
    },
}

console.log(team.listMembers())
// ["Rina - anmastery team", "Budi - anmastery team", "Sari - anmastery team"]

/**
 * 3. Mengatur nilai `this` secara eksplisit dengan `call()`, `apply()`, dan `bind()`.
 *
 * @param {string} greeting Salam pembuka.
 * @param {string} punctuation Tanda baca penutup.
 * @returns {string} Pesan sapaan lengkap.
 */
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`
}

const user = { name: "anmastery" }

/** `call` menerima argumen satu per satu. */
console.log(greet.call(user, "Halo", "!")) // "Halo, anmastery!"

/** `apply` menerima argumen dalam bentuk array. */
console.log(greet.apply(user, ["Selamat datang", "."])) // "Selamat datang, anmastery."

/** `bind` mengembalikan fungsi baru dengan `this` yang sudah terikat permanen. */
const greetUser = greet.bind(user, "Hi")
console.log(greetUser("?")) // "Hi, anmastery?"
