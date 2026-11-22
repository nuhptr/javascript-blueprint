/**
 * Encapsulation (enkapsulasi) adalah prinsip OOP yang menyembunyikan data
 * internal (state) sebuah object dan hanya mengizinkan akses atau perubahan
 * melalui method resmi yang tervalidasi.
 *
 * Tujuannya adalah menjaga integritas data agar tidak dapat diubah sembarangan
 * dari luar object.
 */

/**
 * 1. Enkapsulasi menggunakan private field (`#`) pada class ES6.
 */
class BankAccount {
    /** Saldo disembunyikan secara privat agar tidak bisa dimodifikasi langsung. */
    #balance = 0

    /**
     * Membuat rekening bank baru.
     *
     * @param {string} owner Nama pemilik rekening.
     * @param {number} [initialBalance=0] Saldo awal (harus >= 0).
     */
    constructor(owner, initialBalance = 0) {
        this.owner = owner
        if (initialBalance > 0) this.#balance = initialBalance
    }

    /**
     * Menyetor sejumlah uang ke rekening.
     *
     * @param {number} amount Jumlah setoran (harus lebih besar dari 0).
     * @returns {number} Saldo terbaru setelah setoran.
     */
    deposit(amount) {
        if (amount <= 0) throw new Error("Jumlah setoran harus lebih dari 0.")

        this.#balance += amount
        return this.#balance
    }

    /**
     * Menarik sejumlah uang dari rekening jika saldo mencukupi.
     *
     * @param {number} amount Jumlah penarikan.
     * @returns {number} Saldo terbaru setelah penarikan.
     */
    withdraw(amount) {
        if (amount <= 0) throw new Error("Jumlah penarikan harus lebih dari 0.")

        if (amount > this.#balance) throw new Error("Saldo tidak mencukupi.")

        this.#balance -= amount
        return this.#balance
    }

    /**
     * Membaca saldo terkini secara read-only.
     *
     * @returns {number} Saldo saat ini.
     */
    getBalance() {
        return this.#balance
    }
}

const account = new BankAccount("anmastery", 1000)
account.deposit(500)
account.withdraw(300)

console.log(account.owner) // "anmastery"
console.log(account.getBalance()) // 1200

/**
 * 2. Enkapsulasi menggunakan closure (pola fungsi).
 * Variabel `count` hanya dapat diubah lewat method yang dikembalikan.
 *
 * @param {number} [initialValue=0] Nilai awal penghitung.
 * @returns {{ increment: () => number, decrement: () => number, getCount: () => number }}
 */
function createCounter(initialValue = 0) {
    let count = initialValue

    return {
        increment() {
            count += 1
            return count
        },
        decrement() {
            count -= 1
            return count
        },
        getCount() {
            return count
        },
    }
}

const counter = createCounter(0)
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.getCount()) // 1
