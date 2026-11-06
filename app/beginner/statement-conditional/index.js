const a = 10
const b = 20

/** Bandingkan a dan b. Hanya blok pertama dengan kondisi true yang dijalankan. */
if (a > b) console.log("a lebih besar dari b")
else if (a < b) console.log("a lebih kecil dari b")
else console.log("a sama dengan b")

/**
 * Contoh memilih sapaan berdasarkan waktu.
 * Nilai time di bawah adalah jam dalam format 24 jam.
 */
const time = 15
let greeting

if (time < 10) greeting = "Selamat pagi"
else if (time < 20) greeting = "Selamat siang"
else greeting = "Selamat malam"

console.log(greeting)

/**
 * password belum diberi nilai, jadi nilainya undefined.
 * Ubah nilainya untuk mencoba kondisi-kondisi di bawah.
 */
let password

/** Jika password tepat 8, tampilkan pesan selamat datang. */
if (password === 8) {
    console.log("Selamat datang")
    /** Jika kondisi pertama salah dan password 8 atau kurang, tampilkan pesan ini. */
} else if (password <= 8) {
    console.log("Password terlalu pendek")
    /** Jika kondisi sebelumnya salah dan password 8 atau lebih, tampilkan pesan ini. */
} else if (password >= 8) {
    console.log("Password terlalu panjang")
    console.log("Password harus 8 karakter")
    /** Jika tidak ada kondisi yang cocok, minta pengguna memasukkan password. */
} else {
    console.log("Silakan masukkan password")
}
