/**
 * String adalah tipe data untuk menyimpan teks.
 * Teks ditulis di antara tanda kutip tunggal, tanda kutip ganda, atau backtick.
 */
const favActorFirstName = "Bertram"
const favActorLastName = "Gilfoyle"
const greeting = "Halo!"
const quote = "Belajar JavaScript itu menyenangkan."

/**
 * Gabungkan beberapa string dengan operator +.
 * Spasi harus ditambahkan secara eksplisit agar kata-katanya tidak menempel.
 */
const fullName = favActorFirstName + " " + favActorLastName
console.log(fullName)

/**
 * Template literal menggunakan backtick (`) dan ${...} untuk menyisipkan nilai.
 * Cara ini biasanya lebih mudah dibaca daripada menggabungkan banyak string dengan +.
 */
const message = `Aktor favorit saya adalah ${fullName}.`
console.log(message)

/**
 * String memiliki properti dan metode yang berguna.
 * length menghitung jumlah karakter, sedangkan toUpperCase() dan toLowerCase()
 * menghasilkan teks dengan huruf besar atau huruf kecil.
 */
console.log(greeting.length)
console.log(favActorFirstName.toUpperCase())
console.log(favActorLastName.toLowerCase())

/**
 * Gunakan includes() untuk memeriksa apakah string berisi teks tertentu.
 * Pemeriksaan ini peka terhadap huruf besar dan kecil.
 */
console.log(quote.includes("JavaScript")) // True
console.log(quote.includes("javascript")) // False

/**
 * String bersifat immutable, artinya metodenya tidak mengubah string asli.
 * Hasil metode perlu disimpan jika ingin digunakan kembali.
 */
const uppercaseName = fullName.toUpperCase()
console.log(uppercaseName)
console.log(fullName)
