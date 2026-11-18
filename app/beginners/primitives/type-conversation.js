/**
 * Konversi tipe adalah proses mengubah nilai dari satu tipe data JavaScript ke tipe lainnya.
 * Contohnya, nilai yang dimasukkan melalui formulir biasanya berupa string,
 * meskipun isinya terlihat seperti angka.
 */
const amount = 100
const moneyText = "100"
const decimalText = "99.5"

/**
 * Number() mengubah string angka menjadi number.
 * Seluruh isi string harus dapat dibaca sebagai angka; jika tidak, hasilnya NaN.
 */
const moneyAsNumber = Number(moneyText)
console.log(moneyAsNumber, typeof moneyAsNumber) /** 100 "number" */

/** Operator plus (+) adalah cara singkat untuk mengubah string angka menjadi number. */
const amountFromText = +moneyText
console.log(amountFromText, typeof amountFromText) /** 100 "number" */

/** Gunakan parseInt() untuk mengambil bilangan bulat; bagian desimal akan dihilangkan. */
const wholeNumber = parseInt(decimalText, 10)
console.log(wholeNumber) /** 99 */

/** Gunakan parseFloat() jika bagian desimal ingin dipertahankan. */
const decimalNumber = parseFloat(decimalText)
console.log(decimalNumber) /** 99.5 */

/** Ubah number menjadi string menggunakan String() atau metode toString(). */
const amountAsString = String(amount)
const anotherAmountAsString = amount.toString()
console.log(amountAsString, typeof amountAsString) /** "100" "string" */
console.log(anotherAmountAsString) /** "100" */
