/**
 * switch memilih kode yang dijalankan berdasarkan nilai sebuah variabel.
 * Di contoh ini, nilai fruits adalah "Banana".
 */
let fruits = "Banana"

switch (fruits) {
    /** Jalankan bagian ini jika fruits bernilai "Banana". */
    case "Banana":
        console.log("Banana is good!")
        /** break menghentikan switch agar case berikutnya tidak ikut dijalankan. */
        break
    /** Jalankan bagian ini jika fruits bernilai "Orange". */
    case "Orange":
        console.log("I am not a fan of orange.")
        break
    /** Jalankan bagian ini jika fruits bernilai "Apple". */
    case "Apple":
        console.log("How you like them apples?")
        break
    /** default dijalankan jika tidak ada case yang cocok. */
    default:
        console.log("I have never heard of that fruit...")
}
