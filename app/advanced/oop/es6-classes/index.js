/**
 * ES6 Classes menyediakan sintaks modern yang lebih bersih dan terstruktur untuk
 * membuat object dan pewarisan. Di balik layar, `class` tetap menggunakan
 * mekanisme prototype milik JavaScript.
 */

/**
 * 1. Deklarasi class dengan `constructor`, instance method, getter, dan static method.
 */
class Hero {
    /**
     * Membuat instance Hero baru.
     *
     * @param {string} name Nama hero.
     * @param {number} level Level awal hero.
     */
    constructor(name, level) {
        this.name = name
        this.level = level
    }

    /**
     * Mengembalikan sapaan hero.
     *
     * @returns {string} Pesan perkenalan hero.
     */
    greet() {
        return `Halo, saya ${this.name} pada level ${this.level}.`
    }

    /**
     * Getter untuk menentukan peringkat berdasarkan level.
     *
     * @returns {string} Peringkat hero.
     */
    get rank() {
        return this.level >= 10 ? "Master" : "Apprentice"
    }

    /**
     * Static method dipanggil langsung melalui class, bukan dari instance.
     *
     * @param {Hero} firstHero Hero pertama.
     * @param {Hero} secondHero Hero kedua.
     * @returns {Hero} Hero dengan level lebih tinggi.
     */
    static getHigherLevel(firstHero, secondHero) {
        return firstHero.level >= secondHero.level ? firstHero : secondHero
    }
}

/**
 * 2. Pewarisan class dengan `extends` dan `super()`.
 */
class Mage extends Hero {
    /**
     * Membuat instance Mage yang mewarisi Hero.
     *
     * @param {string} name Nama mage.
     * @param {number} level Level mage.
     * @param {string} spell Mantra andalan.
     */
    constructor(name, level, spell) {
        super(name, level)
        this.spell = spell
    }

    /**
     * Mengeluarkan mantra milik mage.
     *
     * @returns {string} Pesan serangan mantra.
     */
    castSpell() {
        return `${this.name} merapal mantra ${this.spell}!`
    }
}

const warrior = new Hero("anmastery", 12)
const mage = new Mage("Lina", 8, "Fireball")

console.log(warrior.greet()) // "Halo, saya anmastery pada level 12."
console.log(warrior.rank) // "Master"
console.log(mage.greet()) // "Halo, saya Lina pada level 8."
console.log(mage.castSpell()) // "Lina merapal mantra Fireball!"
console.log(Hero.getHigherLevel(warrior, mage).name) // "anmastery"
