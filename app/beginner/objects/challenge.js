/**
 * Challenge:
 * 1. Create a car object with type, model, and color properties.
 * 2. Check its data type and print the type property.
 * 3. Change type to "Toyota".
 * 4. Add a wheels property, then print the car object.
 */

/**
 * Object menyimpan beberapa informasi dalam satu tempat.
 * Setiap informasi punya nama (key) dan nilai (value).
 */
const car = { type: "Fiat", model: "500", color: "white" }

/**
 * typeof digunakan untuk melihat jenis data.
 * Nilai car adalah object.
 */
console.log(typeof car)

/**
 * Gunakan titik dan nama properti untuk membaca nilainya.
 */
console.log(car.type)

/**
 * Gunakan tanda = untuk mengubah nilai properti.
 */
console.log((car.type = "Toyota"))

/**
 * Tulis nama properti baru setelah titik untuk menambahkannya.
 */
console.log((car.wheels = 4))

/** Tampilkan object car beserta semua propertinya. */
console.log(car)
