/** Set menyimpan nilai unik; duplikasi tidak disimpan sebagai entri baru. */
const letters = new Set()

/** Tambahkan beberapa huruf ke dalam Set. */
letters.add("a")
letters.add("b")
letters.add("c")

/** Variabel berikut dibuat sebagai contoh nilai yang dapat ditambahkan. */
const a = "a"
const b = "b"
const c = "c"

/**
 * Iterasi setiap nilai unik pada letters.
 * Output: a, b, c, masing-masing satu kali.
 */
for (let value of letters) {
    console.log(value)
}

/**
 * Ambil huruf alfabet unik dari sebuah string.
 * Huruf kapital diubah menjadi huruf kecil, sehingga H dan h dianggap sama.
 * Duplikasi tidak dihitung sebagai entri baru dan tidak disimpan ulang.
 *
 * @param {string} str String yang akan dicari huruf uniknya.
 * @returns {Set<string>} Set berisi huruf alfabet unik tanpa duplikasi.
 */
function getUniqueLetters(str) {
    const uniqueLetters = new Set()
    const lowercaseStr = str.toLowerCase()

    /** Iterasi setiap karakter, termasuk spasi dan tanda baca. */
    for (const char of lowercaseStr) {
        /** Hanya tambahkan karakter dari a sampai z ke dalam Set. */
        if (/[a-z]/i.test(char)) {
            uniqueLetters.add(char)
        }
    }

    return uniqueLetters
}

/** "Hello World" menghasilkan huruf unik: h, e, l, o, w, r, d. */
const text = "Hello World"
const uniqueLettersSet = getUniqueLetters(text)

/**
 * Output Set:
 * Set(7) { 'h', 'e', 'l', 'o', 'w', 'r', 'd' }
 * Huruf l muncul dua kali pada "Hello", tetapi di Set hanya disimpan sekali.
 */
console.log(uniqueLettersSet)
