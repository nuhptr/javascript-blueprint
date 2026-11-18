/**
 * Object dapat menyimpan data (name dan age) serta function.
 * Function yang menjadi properti object disebut method.
 */
const person = {
    name: "anmastery",
    age: 19,

    /**
     * Buat sapaan menggunakan data dari object pemanggil.
     *
     * @returns {string} Sapaan yang berisi nama dan umur.
     */
    greet: function greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`
    },
}

/** Saat dipanggil sebagai person.greet(), `this` merujuk ke person. */
console.log(person.greet())
