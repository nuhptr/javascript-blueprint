/** Buat object Date dengan tanggal dan waktu saat ini. */
const currentDate = new Date()
/** Contoh output Node.js (bergantung pada waktu dijalankan): 2026-11-17T04:16:56.229Z */
console.log(currentDate)

/**
 * Buat tanggal lokal: 25 Juli 2023 pukul 12.30.
 * Ingat, indeks bulan dimulai dari 0, jadi 6 berarti Juli.
 */
const specificDate = new Date(2023, 6, 25, 12, 30, 0, 0)
/** Contoh output Node.js jika zona waktu lokal Asia/Jakarta: 2023-07-25T05:30:00.000Z */
console.log(specificDate)

/** Buat salinan waktu saat ini untuk contoh perubahan tanggal dan jam. */
const date = new Date()

/** Tambahkan satu hari; Date menangani perpindahan bulan atau tahun otomatis. */
date.setDate(date.getDate() + 1)

/** Kurangi dua jam dengan membaca jam saat ini terlebih dahulu. */
date.setHours(date.getHours() - 2)

/** Tampilkan tanggal setelah perubahannya; hasil bergantung pada waktu eksekusi. */
/** Contoh output Node.js pada waktu yang sama: 2026-11-18T02:16:56.229Z */
console.log(date)

/**
 * Contoh lengkap lain: parse tanggal ISO dengan zona waktu +07:00,
 * lalu format agar tampil dalam bahasa Indonesia dan zona Asia/Jakarta.
 */
const meetingDate = new Date("2023-07-25T12:30:00+07:00")
const formattedMeetingDate = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Jakarta",
}).format(meetingDate)
/** Output: Selasa, 25 Juli 2023 pukul 12.30 */
console.log(formattedMeetingDate)

/**
 * Ambil setiap bagian tanggal dan waktu dari object date.
 * Getter berikut menggunakan zona waktu lokal perangkat.
 */
const year = date.getFullYear()
/** Indeks bulan dimulai dari 0: Januari = 0 hingga Desember = 11. */
const month = date.getMonth()
const day = date.getDate()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const milliseconds = date.getMilliseconds()

/**
 * Tampilkan bagian tanggal dan waktu.
 * Contoh output untuk 17 November 2026 sekitar pukul 11.16 WIB:
 * year:  2026
 * month:  10
 * day:  18
 * hours:  9
 * minutes:  16
 * seconds:  56
 * milliseconds:  229
 */
console.log(`year:  ${year}`)
console.log(`month:  ${month}`)
console.log(`day:  ${day}`)
console.log(`hours:  ${hours}`)
console.log(`minutes:  ${minutes}`)
console.log(`seconds:  ${seconds}`)
console.log(`milliseconds:  ${milliseconds}`)

/**
 * Format tanggal untuk ditampilkan.
 * Hasilnya berubah sesuai nilai date, locale, dan zona waktu perangkat.
 */
/** Tampilkan tanggal lokal dalam format teks yang ringkas. */
/** Contoh output: Wed Nov 18 2026 */
console.log(date.toDateString())

/** Tampilkan tanggal dalam format ISO standar UTC; akhiran Z berarti UTC. */
/** Contoh output: 2026-11-18T02:16:56.229Z */
console.log(date.toISOString())

/** Tampilkan tanggal dan waktu sesuai locale serta zona waktu perangkat. */
/** Contoh output Node.js dengan locale en-US dan zona Asia/Jakarta: 11/18/2026, 9:16:56 AM */
console.log(date.toLocaleString())
