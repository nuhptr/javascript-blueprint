/**
 * Object menyimpan beberapa informasi dalam satu tempat.
 * Setiap informasi ditulis sebagai pasangan nama (key) dan nilai (value).
 */
const person = {
    firstName: "Anmastery",
    lastName: "Developer",
    age: 18,
    location: ["Planet", "Earth"],
    isProgrammer: true,
}

/**
 * Gunakan titik untuk mengambil nilai dari object.
 * typeof menunjukkan jenis data person, yaitu "object".
 */
console.log(typeof person)

/** location adalah array, jadi [1] mengambil item kedua, yaitu "Earth". */
console.log(person.location[1])

/** Nama key juga bisa ditulis di dalam tanda kurung siku dan kutip. */
console.log(person["isProgrammer"])

/**
 * Ubah nilai properti dengan memakai tanda =.
 */
console.log(person.firstName)
console.log((person.firstName = "Sam"))

/**
 * Properti baru bisa ditambahkan dengan cara yang sama.
 * Di sini, nilai isProgrammer diubah menjadi false.
 */
console.log((person.isProgrammer = false))
console.log(person)
