/**
 * switch memilih kode yang dijalankan berdasarkan nilai.
 * Nilai yang dibandingkan harus sama, termasuk tipe datanya.
 */
const x = 0
let text = ""

switch (x) {
    /** Jalankan kode ini jika x bernilai angka 0. */
    case 0:
        text = "Off"
        /** break menghentikan switch setelah menemukan pilihan yang cocok. */
        break
    /** Jalankan kode ini jika x bernilai angka 1. */
    case 1:
        text = "On"
        break
    /** Jalankan ini jika tidak ada case yang cocok. */
    default:
        text = "Nilai tidak ditemukan"
}
console.log(text)

/**
 * Contoh lain: pilih pesan berdasarkan nama hari.
 * Karena day bernilai "monday", case "monday" yang dijalankan.
 */
const day = "monday"

switch (day) {
    /** Setiap case memeriksa apakah day sama dengan nama hari tersebut. */
    case "monday":
        console.log("Hari ini Senin")
        break
    case "tuesday":
        console.log("Hari ini Selasa")
        break
    case "wednesday":
        console.log("Hari ini Rabu")
        break
    case "thursday":
        console.log("Hari ini Kamis")
        break
    case "friday":
        console.log("Hari ini Jumat")
        break
    case "saturday":
        console.log("Hari ini Sabtu")
        break
    case "sunday":
        console.log("Hari ini Minggu")
        break
    /** Tampilkan pesan ini jika day bukan salah satu nama hari di atas. */
    default:
        console.log("Nama hari tidak dikenali")
}
