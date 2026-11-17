/**
 * Function menjalankan kumpulan instruksi saat dipanggil.
 * Function ini mencetak sapaan tanpa menerima parameter.
 *
 * @returns {void} Tidak mengembalikan nilai.
 */
function greet() {
    console.log("hello there")
}

/** Panggil function dengan menuliskan namanya diikuti tanda kurung. */
greet()

/**
 * Cetak sapaan untuk username yang diberikan.
 * Jika username tidak diberikan, gunakan nilai default "Default".
 *
 * @param {string} [username="Default"] Nama orang yang akan disapa.
 * @returns {void} Tidak mengembalikan nilai; sapaan dicetak ke console.
 */
function sayHello(username = "Default") {
    console.log(`hello ${username}`)
}

/** Argumen "anmastery" mengisi parameter username. */
sayHello("anmastery")

/**
 * Jumlahkan dua angka lalu kembalikan hasilnya.
 * Kedua parameter bernilai 0 jika argumennya tidak diberikan.
 *
 * @param {number} [numberOne=0] Angka pertama.
 * @param {number} [numberTwo=0] Angka kedua.
 * @returns {number} Hasil penjumlahan kedua angka.
 */
function add(numberOne = 0, numberTwo = 0) {
    return numberOne + numberTwo
}

/** Simpan nilai yang dikembalikan add(), lalu cetak hasilnya. */
const result = add(10, 20)
console.log(result)
