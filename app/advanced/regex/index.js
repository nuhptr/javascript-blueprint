/**
 * Regular Expression (Regex / RegExp) adalah pola karakter yang digunakan untuk
 * mencocokkan, memvalidasi, mengekstrak, dan mengganti bagian tertentu dari teks.
 *
 * Kasus penggunaan paling umum:
 * 1. Validasi input form (email, username, nomor telepon, password).
 * 2. Pencarian dan ekstraksi pola dari teks (hashtag, tanggal, ID).
 * 3. Pembersihan dan pemformatan string (menghapus spasi ganda, sensor data).
 */

/**
 * 1. Membuat Regex: sintaks literal vs `new RegExp()`, beserta flag `i` dan `g`.
 * - Gunakan literal `/pola/flags` untuk pola statis (lebih ringkas dan cepat).
 * - Gunakan `new RegExp(pola, flags)` ketika pola dibangun secara dinamis.
 */
const brandPattern = /anmastery/i
const dynamicKeyword = "javascript"
const dynamicPattern = new RegExp(dynamicKeyword, "i")

console.log(brandPattern.test("Belajar JS bersama Anmastery")) // true
console.log(dynamicPattern.test("Belajar JavaScript Advanced")) // true

/**
 * 2. Character classes & shorthand (`\d`, `\w`, `\s`, `[a-z]`).
 * - `\d` mencocokkan digit 0-9.
 * - `\w` mencocokkan huruf, angka, dan underscore (`_`).
 * - `\s` mencocokkan whitespace (spasi, tab, newline).
 */
const orderText = "Order #2026 berisi 12 item seharga 450000"
const extractedNumbers = orderText.match(/\d+/g)

console.log(extractedNumbers) // ["2026", "12", "450000"]

/**
 * 3. Anchors (`^`, `$`) dan quantifiers (`+`, `*`, `?`, `{min,max}`).
 * Anchor `^` dan `$` memastikan seluruh string cocok dari awal hingga akhir,
 * bukan hanya sebagian teks di tengahnya.
 *
 * @param {string} username Nama pengguna yang ingin divalidasi.
 * @returns {boolean} `true` jika hanya berisi huruf kecil, angka, atau `_` (3-16 karakter).
 */
function isValidUsername(username) {
    const usernamePattern = /^[a-z0-9_]{3,16}$/
    return usernamePattern.test(username)
}

console.log(isValidUsername("anmastery_dev")) // true
console.log(isValidUsername("ab")) // false (kurang dari 3 karakter)
console.log(isValidUsername("anmastery dev")) // false (mengandung spasi)

/**
 * 4. Named capturing groups (`(?<name>...)`) untuk mengekstrak data terstruktur.
 *
 * @param {string} isoDate Tanggal dalam format `YYYY-MM-DD`.
 * @returns {{ year: string, month: string, day: string } | null} Bagian tanggal atau `null` jika tidak cocok.
 */
function parseIsoDate(isoDate) {
    const datePattern = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/
    const match = isoDate.match(datePattern)

    return match ? { ...match.groups } : null
}

console.log(parseIsoDate("2026-11-22")) // { year: "2026", month: "11", day: "22" }
console.log(parseIsoDate("22/11/2026")) // null

/**
 * 5. Membersihkan dan memformat teks dengan `.replace()` dan `.split()`.
 */
const messyText = "Belajar   Regex    di   JavaScript"
const normalizedText = messyText.replace(/\s+/g, " ")
console.log(normalizedText) // "Belajar Regex di JavaScript"

/** Memecah daftar tag yang dipisahkan koma atau spasi berlebih. */
const rawTags = "javascript, regex ,  advanced,  es6"
const tagList = rawTags.split(/\s*,\s*/)
console.log(tagList) // ["javascript", "regex", "advanced", "es6"]

/**
 * 6. Contoh praktis: validasi email sederhana, ekstraksi hashtag, dan sensor nomor.
 */

/**
 * Memeriksa format dasar alamat email.
 *
 * @param {string} email Alamat email yang akan diperiksa.
 * @returns {boolean} `true` jika format email valid.
 */
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    return emailPattern.test(email)
}

console.log(isValidEmail("hello@anmastery.dev")) // true
console.log(isValidEmail("bukan-email@")) // false

/**
 * Mengambil seluruh hashtag dari sebuah kalimat.
 * Mengembalikan array kosong `[]` jika tidak ada hashtag yang ditemukan.
 *
 * @param {string} text Teks sumber.
 * @returns {string[]} Daftar hashtag yang ditemukan.
 */
function extractHashtags(text) {
    return text.match(/#[a-zA-Z0-9_]+/g) ?? []
}

console.log(extractHashtags("Belajar #JavaScript dan #Regex bersama #anmastery"))
// ["#JavaScript", "#Regex", "#anmastery"]
console.log(extractHashtags("Teks tanpa hashtag"))
// []

/**
 * Menyamarkan digit tengah nomor telepon menggunakan lookahead/group replacement.
 *
 * @param {string} phone Nomor telepon dalam format digit.
 * @returns {string} Nomor telepon yang bagian tengahnya disamarkan dengan `*`.
 */
function maskPhoneNumber(phone) {
    return phone.replace(/^(\d{4})(\d+)(\d{3})$/, (_, start, middle, end) => {
        return `${start}${"*".repeat(middle.length)}${end}`
    })
}

console.log(maskPhoneNumber("081234567890")) // "0812*****890"
