/**
 * Variabel password belum memiliki nilai, jadi isinya adalah undefined.
 * Ganti dengan angka untuk mencoba kondisi di bawah.
 */
let password = undefined

/**
 * if memeriksa kondisi di dalam tanda kurung.
 * Jika password sama dengan 8, tampilkan "Welcome".
 */
if (password === 8) {
    console.log("Welcome")
    /**
     * else if diperiksa jika kondisi sebelumnya tidak benar.
     * Jika nilainya 8 atau kurang, password dianggap terlalu pendek.
     */
} else if (password <= 8) {
    console.log("Password is too short")
    /**
     * Jika kondisi sebelumnya tidak benar, periksa apakah nilainya 8 atau lebih.
     */
} else if (password >= 8) {
    console.log("Too long password")
    console.log("Password should be 8 characters")
    /**
     * else dijalankan jika semua kondisi di atas tidak terpenuhi.
     */
} else {
    console.log("Please provide a password")
}
