/**
 * Simulasi pemeriksaan akses ke sebuah acara.
 */
const attendeeName = "Alya"
const attendeeAge = 21
const hasValidTicket = true
const isOnGuestList = false
const hasOutstandingPayment = false

const isOldEnough = attendeeAge >= 18
const hasPaid = !hasOutstandingPayment
const canEnter = isOldEnough && hasPaid && (hasValidTicket || isOnGuestList)

console.log(`Nama peserta: ${attendeeName}`)
console.log("Cukup umur:", isOldEnough)
console.log("Sudah membayar:", hasPaid)
console.log("Memiliki tiket atau terdaftar:", hasValidTicket || isOnGuestList)

if (canEnter) {
    console.log(`${attendeeName} boleh masuk ke acara.`)
} else {
    console.log(`${attendeeName} belum boleh masuk ke acara.`)
}

/**
 * Tampilkan alasan jika peserta belum bisa masuk.
 */
if (!isOldEnough) {
    console.log("Alasan: peserta harus berusia minimal 18 tahun.")
}

if (!hasPaid) {
    console.log("Alasan: pembayaran peserta belum lunas.")
}

if (!hasValidTicket && !isOnGuestList) {
    console.log("Alasan: peserta harus memiliki tiket atau terdaftar di daftar tamu.")
}
