/**
 * for biasa mengulang kode beberapa kali.
 * i dimulai dari 0, bertambah 1, lalu berhenti saat i lebih dari 5.
 */
for (let i = 0; i <= 5; i++) {
    console.log("Hello World", i)
}

/**
 * for...of mengambil setiap nilai dari array satu per satu.
 */
const fruits = ["Apel", "Jeruk", "Pisang"]
for (const fruit of fruits) {
    console.log(fruit)
}

/**
 * for...in mengambil nama properti dari sebuah objek.
 */
const person = { name: "Budi", city: "Jakarta" }
for (const key in person) {
    console.log(key, person[key])
}
