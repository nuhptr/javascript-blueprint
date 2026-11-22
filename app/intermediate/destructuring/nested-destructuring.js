/**
 * Nested destructuring digunakan untuk mengekstrak nilai dari struktur data
 * bertingkat, seperti array yang berisi object atau object yang berisi object
 * dan array lainnya.
 */

/**
 * 1. Mengambil properti dari object di dalam array.
 * Koma kosong melewati elemen ke-1 dan ke-2 untuk langsung mengambil elemen ke-3.
 */
const songs = [
    { name: "Lucky You", singer: "Joyner", duration: 4.34 },
    { name: "Just Like You", singer: "NF", duration: 3.23 },
    { name: "Humble", singer: "Kendrick Lamar", duration: 2.33 },
    { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
    { name: "Cold Shoulder", singer: "Central Cee", duration: 5.23 },
]

const [, , { name: thirdSongTitle, singer: thirdSongSinger }] = songs
console.log(thirdSongTitle) // "Humble"
console.log(thirdSongSinger) // "Kendrick Lamar"

/**
 * 2. Nested destructuring pada object bertingkat dengan nilai default.
 * Memberikan `= {}` pada level bertingkat mencegah error jika properti induk tidak ada.
 */
const userProfile = {
    username: "jen_dev",
    contact: {
        email: "jen@example.com",
        address: {
            city: "Jakarta",
            country: "Indonesia",
        },
    },
}

const { username, contact: { email, address: { city, country = "Unknown" } = {} } = {} } =
    userProfile

console.log(username) // "jen_dev"
console.log(email) // "jen@example.com"
console.log(`${city}, ${country}`) // "Jakarta, Indonesia"
