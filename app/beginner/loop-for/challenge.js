/**
 * for biasa mengulang kode selama kondisi masih benar.
 * i dimulai dari 0, bertambah 1 setiap putaran, dan berhenti setelah 1000.
 */
for (let i = 0; i <= 1000; i++) {
    console.log("anmastery developer", i)
}

/**
 * for...of digunakan untuk mengambil setiap nilai dari array.
 * Di sini, setiap nama dicetak satu per satu.
 */
const names = ["Ani", "Budi", "Citra"]
for (const name of names) {
    console.log(name)
}

/**
 * for...in digunakan untuk mengambil nama properti dari sebuah objek.
 * Gunakan objek[key] untuk membaca nilai dari properti tersebut.
 */
const person = {
    name: "Budi",
    city: "Jakarta",
}

for (const key in person) {
    console.log(key, person[key])
}
