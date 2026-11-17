/** Variabel ini dideklarasikan di scope luar dan bisa dibaca di bawahnya. */
let textMessage = "Hi"

/**
 * Variabel lokal di dalam function memiliki scope function.
 * Nama textMessage lokal ini menutupi (shadow) variabel di scope luar.
 */
function showMessage() {
    let textMessage = "Hi"
    console.log(textMessage)
}

/** Panggil function; yang dicetak adalah textMessage lokal milik function. */
showMessage()

/**
 * `index` hanya tersedia di dalam blok for.
 * Nilainya berubah dari 0 sampai 4; setelah iterasi selesai, index tidak bisa
 * diakses dari luar blok.
 */
for (let index = 0; index < 5; index++) {
    console.log(index)
}

/**
 * Baris ini melempar ReferenceError karena index berada di luar scope.
 * Akibatnya, console.log(textMessage) di bawah tidak sempat dijalankan.
 */
console.log(index)

/** Jika baris sebelumnya dihapus, ini mencetak variabel textMessage scope luar. */
console.log(textMessage)
