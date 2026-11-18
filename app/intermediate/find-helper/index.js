/** Array usia yang akan dicari nilainya. */
const ages = [3, 10, 18, 20]

/**
 * Periksa apakah usia memenuhi syarat lebih dari 18.
 *
 * @param {number} age Usia yang sedang diperiksa.
 * @returns {boolean} true jika usia lebih dari 18.
 */
function checkAge(age) {
    return age > 18
}

/**
 * find() mengembalikan nilai pertama yang membuat checkAge() bernilai true.
 * Angka 18 tidak memenuhi karena syaratnya harus lebih dari 18.
 * Output: 20.
 */
const res = ages.find(checkAge)
console.log(res)
