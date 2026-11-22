/**
 * Class modifiers mengatur visibilitas properti dan method dalam sebuah class.
 *
 * Di JavaScript modern (ES2022+):
 * 1. Public fields/methods    - Dapat diakses dari mana saja (default).
 * 2. Private fields/methods   - Diawali `#`, hanya bisa diakses di dalam class itu sendiri.
 * 3. Protected (konvensi `_`) - JavaScript murni belum memiliki keyword `protected`,
 *                               sehingga developer memakai awalan `_` sebagai kesepakatan
 *                               agar hanya diakses oleh class dan turunannya.
 */

class Account {
    /** Public field: dapat dibaca langsung dari luar class. */
    owner

    /** Protected convention field: ditujukan untuk internal class dan subclass. */
    _tier

    /** Private field: benar-benar tersembunyi dan dilindungi oleh runtime JavaScript. */
    #pin

    /**
     * Membuat akun baru dengan informasi akses publik, protected, dan privat.
     *
     * @param {string} owner Nama pemilik akun.
     * @param {string} tier Tingkatan akun (mis. "basic" atau "pro").
     * @param {string} pin PIN rahasia akun.
     */
    constructor(owner, tier, pin) {
        this.owner = owner
        this._tier = tier
        this.#pin = pin
    }

    /**
     * Private method untuk memformat PIN secara aman sebelum dicocokkan.
     *
     * @param {string} value Input PIN.
     * @returns {string} PIN yang sudah di-trim.
     */
    #normalizePin(value) {
        return String(value).trim()
    }

    /**
     * Public method untuk memverifikasi PIN tanpa pernah mengekspos nilai `#pin`.
     *
     * @param {string} candidatePin PIN yang dimasukkan pengguna.
     * @returns {boolean} `true` jika PIN cocok.
     */
    verifyPin(candidatePin) {
        return this.#normalizePin(candidatePin) === this.#pin
    }
}

class ProAccount extends Account {
    /**
     * Mengambil deskripsi tier menggunakan properti konvensi protected `_tier`.
     *
     * @returns {string} Label pemilik beserta tier akunnya.
     */
    getBadge() {
        return `${this.owner} [${this._tier.toUpperCase()}]`
    }
}

const userAccount = new ProAccount("anmastery", "pro", "4821")

console.log(userAccount.owner) // "anmastery"
console.log(userAccount.getBadge()) // "anmastery [PRO]"
console.log(userAccount.verifyPin("4821")) // true
console.log(userAccount.verifyPin("0000")) // false
console.log(Object.keys(userAccount)) // ["owner", "_tier"] (private field #pin tidak terlihat)
