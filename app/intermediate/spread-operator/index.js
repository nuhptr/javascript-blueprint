/**
 * Spread operator (`...`) digunakan untuk memecah elemen iterable (seperti array
 * atau string) maupun properti enumerable milik object.
 *
 * Operator ini sering dipakai untuk:
 * 1. Menyalin (shallow copy) array atau object tanpa memutasi data asli.
 * 2. Menggabungkan beberapa array atau object secara immutable.
 * 3. Mengirim elemen array sebagai argumen individual ke dalam fungsi.
 */

/**
 * 1. Menyalin dan menggabungkan array.
 * Menggunakan spread operator menghasilkan array baru dengan referensi berbeda,
 * sehingga perubahan pada array hasil tidak memengaruhi array asli.
 */
const firstNumbers = [1, 2, 3]
const secondNumbers = [4, 5]

const clonedNumbers = [...firstNumbers]
const mergedNumbers = [0, ...firstNumbers, ...secondNumbers, 6]

console.log(clonedNumbers) // [1, 2, 3]
console.log(clonedNumbers === firstNumbers) // false
console.log(mergedNumbers) // [0, 1, 2, 3, 4, 5, 6]

/**
 * 2. Menyalin, menggabungkan, dan memperbarui object.
 * Urutan spread menentukan nilai akhir: properti yang ditulis lebih akhir akan
 * menimpa properti dengan key yang sama di sebelah kirinya.
 */
const user = {
    name: "Jen",
    age: 22,
    role: "member",
}

const clonedUser = { ...user }
const updatedUser = { ...user, age: 23, isActive: true }

console.log(clonedUser) // { name: "Jen", age: 22, role: "member" }
console.log(clonedUser === user) // false
console.log(updatedUser) // { name: "Jen", age: 23, role: "member", isActive: true }

/**
 * 3. Mengirim elemen array sebagai argumen fungsi.
 * Spread memecah elemen array menjadi argumen terpisah yang sesuai urutan parameter.
 */
const scores = [78, 92, 85, 96, 88]

/** Cari nilai tertinggi dari array menggunakan Math.max(). */
const highestScore = Math.max(...scores)
console.log(highestScore) // 96

/**
 * 4. Memecah string menjadi array karakter.
 * Karena string bersifat iterable, spread operator dapat memecahnya per karakter.
 */
const language = "JS"
const characters = [...language]
console.log(characters) // ["J", "S"]

/**
 * 5. Contoh praktis: memperbarui data user secara immutable.
 *
 * @param {object} currentUser Data user saat ini.
 * @param {object} updates Properti baru atau perubahan yang ingin diterapkan.
 * @returns {object} Object user baru tanpa mengubah object asli.
 */
function updateUserProfile(currentUser, updates) {
    return {
        ...currentUser,
        ...updates,
    }
}

const promotedUser = updateUserProfile(user, { role: "admin" })
console.log(user.role) // "member"
console.log(promotedUser.role) // "admin"

/**
 * 6. Catatan penting: spread operator melakukan shallow copy (salinan dangkal).
 * Properti bertingkat (nested object) masih berbagi referensi yang sama kecuali
 * ikut disalin dengan spread operator.
 */
const profile = {
    name: "Jen",
    address: {
        city: "Jakarta",
        country: "Indonesia",
    },
}

/** Salin juga nested object agar perubahan pada address tetap immutable. */
const updatedProfile = {
    ...profile,
    address: {
        ...profile.address,
        city: "Bandung",
    },
}

console.log(profile.address.city) // "Jakarta"
console.log(updatedProfile.address.city) // "Bandung"
