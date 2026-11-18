/**
 * Symbol adalah tipe data primitif yang menghasilkan nilai unik.
 * Deskripsi hanya membantu saat dibaca; deskripsi yang sama tidak membuat
 * dua Symbol menjadi identik.
 */
const symbol = Symbol("foo")
const sameDescriptionSymbol = Symbol("foo")

/** Nilai Symbol hanya dapat diperiksa dengan simbol itu sendiri. */
console.log(symbol.description) // "foo"
console.log(typeof symbol) // "symbol"
console.log(symbol === sameDescriptionSymbol) // false

/**
 * Symbol dapat dibungkus menjadi object menggunakan Object().
 * Object tersebut tidak lagi merupakan tipe primitif, sehingga typeof-nya
 * akan menghasilkan "object".
 */
const symbolObject = Object(symbol)
console.log(typeof symbolObject) // "object"

/**
 * Symbol cocok digunakan sebagai key object agar tidak bertabrakan dengan
 * properti string yang sudah ada. Setiap symbolKey baru juga tetap unik.
 */
const symbolKey = Symbol("id")
const obj = {
    id: "string-key",
    [symbolKey]: "symbol-key",
}

console.log(obj.id) // "string-key"
console.log(obj[symbolKey]) // "symbol-key"

/**
 * Properti berbasis Symbol tidak ditampilkan oleh for...in maupun Object.keys().
 * Gunakan Object.getOwnPropertySymbols() untuk mengambil key Symbol milik object.
 */
for (const key in obj) {
    console.log(key)
}

console.log(Object.keys(obj)) // ["id"]
console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(id)]

/**
 * Symbol.for() membuat atau mengambil Symbol global berdasarkan key.
 * Symbol.keyFor() mengembalikan key hanya untuk Symbol yang dibuat secara global.
 */
const globalSymbol = Symbol.for("shared")
const sameGlobalSymbol = Symbol.for("shared")
const localSymbol = Symbol("local")

console.log(globalSymbol === sameGlobalSymbol) // true
console.log(Symbol.keyFor(globalSymbol)) // "shared"
console.log(Symbol.keyFor(localSymbol)) // undefined
