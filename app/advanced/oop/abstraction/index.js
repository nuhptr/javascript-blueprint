/**
 * Abstraction (abstraksi) adalah prinsip OOP untuk menyembunyikan detail
 * implementasi yang rumit dan hanya menampilkan antarmuka (interface) yang
 * relevan bagi pengguna class.
 *
 * Karena JavaScript tidak memiliki kata kunci `abstract`, kita dapat menyimulasikan
 * abstract base class dengan pemeriksaan `new.target` dan method wajib override.
 */

/**
 * Abstract base class `Animal` yang tidak boleh diinstansiasi secara langsung.
 */
class Animal {
    /**
     * Membuat dasar instance hewan.
     *
     * @param {string} name Nama hewan.
     */
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("Class Animal bersifat abstrak dan tidak dapat dibuat langsung.")
        }
        this.name = name
    }

    /**
     * Method abstrak yang wajib diimplementasikan oleh setiap subclass.
     *
     * @returns {string} Suara khas hewan.
     */
    makeSound() {
        throw new Error("Method makeSound() harus diimplementasikan oleh subclass.")
    }

    /**
     * Method publik sederhana yang menyembunyikan detail pemanggilan `makeSound()`.
     *
     * @returns {string} Deskripsi hewan beserta suaranya.
     */
    describe() {
        return `${this.name} berbunyi: ${this.makeSound()}`
    }
}

class Dog extends Animal {
    /**
     * Implementasi suara khusus untuk `Dog`.
     *
     * @returns {string} Suara gonggongan.
     */
    makeSound() {
        return "Woof!"
    }
}

class Cat extends Animal {
    /**
     * Implementasi suara khusus untuk `Cat`.
     *
     * @returns {string} Suara mengeong.
     */
    makeSound() {
        return "Meow!"
    }
}

const dog = new Dog("Buddy")
const cat = new Cat("Milo")

console.log(dog.describe()) // "Buddy berbunyi: Woof!"
console.log(cat.describe()) // "Milo berbunyi: Meow!"

/** Contoh pembuktian bahwa class abstrak `Animal` menolak instansiasi langsung. */
try {
    new Animal("Generic")
} catch (error) {
    console.log(error.message) // "Class Animal bersifat abstrak dan tidak dapat dibuat langsung."
}
