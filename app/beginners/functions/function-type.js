/**
 * Function declaration
 * function didefinisikan dengan kata kunci `function`.
 * Deklarasi ini dapat dipanggil sebelum baris definisinya karena hoisting.
 *
 * @param {string} username Nama orang yang akan disapa.
 * @returns {void} Sapaan dicetak ke console.
 */
function sayHello(username) {
    console.log(`Hello ${username}`)
}

/** Panggil function dengan memberikan nilai untuk parameter username. */
sayHello("Anmastery")

/**
 * Function expression
 * function disimpan sebagai nilai dalam sebuah variabel.
 * Karena memakai `const`, variabel greetings harus dideklarasikan sebelum dipanggil.
 *
 * @param {string} user Nama orang yang akan disapa.
 * @returns {void} Sapaan dicetak ke console.
 */
const greetings = function (user) {
    console.log(`Hello ${user}`)
}

/** Panggil function yang disimpan di greetings. */
greetings("Nuhptr")

/**
 * Contoh temporal dead zone (TDZ)
 * `x` belum bisa dibaca sebelum inisialisasi
 * dengan `let`. Baris ini akan melempar ReferenceError, sehingga `let x = 10`
 * di bawahnya tidak sempat dijalankan dalam eksekusi biasa.
 */
console.log(x)
let x = 10
