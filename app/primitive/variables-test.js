/**
 * Challenge:
 * 1. Create variables to store a name, age, and profession.
 * 2. Use const for values that don't need to change and let for values that do.
 * 3. Check the data types with typeof and print the values.
 * 4. Try changing the age and a property on the student object.
 */

/**
 * Variabel adalah nama untuk menyimpan nilai agar dapat digunakan kembali.
 *
 * Deklarasi membuat variabel, sedangkan inisialisasi memberi nilai awal.
 * `const` digunakan jika nama variabel tidak akan diberi nilai baru.
 */
const fullName = "Anmastery"

/**
 * Gunakan `let` jika nilainya memang perlu berubah.
 * Variabel yang dideklarasikan tanpa nilai awal berisi `undefined`.
 */
let age = 25
let profession
console.log("Profesi sebelum diisi:", profession) // undefined
profession = "programmer"

console.log("Nama:", fullName)
console.log("Umur:", age)
console.log("Profesi:", profession)

age = 26
console.log("Umur setelah ulang tahun:", age)

/**
 * Variabel dapat menyimpan berbagai tipe data.
 * `typeof` membantu memeriksa tipe nilai yang disimpan.
 */
const isLearningJavaScript = true
const favoriteColor = null

console.log("Tipe nama:", typeof fullName) // string
console.log("Tipe umur:", typeof age) // number
console.log("Tipe status belajar:", typeof isLearningJavaScript) // boolean
console.log("Nilai warna favorit:", favoriteColor) // null berarti kosong dengan sengaja

/**
 * Nama variabel sebaiknya menjelaskan isi atau kegunaannya.
 * JavaScript membedakan huruf besar dan kecil: `age` berbeda dari `Age`.
 * Nama variabel tidak boleh dimulai dengan angka dan tidak boleh memakai spasi.
 * Gunakan camelCase untuk nama yang terdiri dari beberapa kata.
 */
const favoriteSubject = "JavaScript"
console.log(`${fullName} sedang belajar ${favoriteSubject}.`)

/**
 * `const` mencegah variabel diberi nilai baru, tetapi tidak membekukan isi objek.
 * Properti objek yang dideklarasikan dengan `const` masih dapat diubah.
 */
const student = {
    name: "Anmastery",
    level: "pemula",
}

student.level = "menengah"
console.log("Level siswa:", student.level)

/**
 * `let` dan `const` memiliki block scope: variabel hanya tersedia di dalam
 * blok tempat variabel tersebut dideklarasikan.
 */
if (age >= 18) {
    const ageMessage = "Usia sudah 18 tahun atau lebih."
    console.log(ageMessage)
}

// Pilih `const` sebagai default, lalu gunakan `let` jika perlu mengubah nilainya.
// `var` adalah cara lama untuk membuat variabel; biasanya lebih baik gunakan
// `let` atau `const` karena aturan cakupannya lebih mudah dipahami.
