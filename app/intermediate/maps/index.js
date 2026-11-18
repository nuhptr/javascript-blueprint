/** Buat Map kosong untuk menyimpan pasangan key dan value. */
const map1 = new Map()

/** Tambahkan tiga pasangan key-value ke Map. */
map1.set("a", 1)
map1.set("b", 2)
map1.set("c", 3)

/** Ambil value milik key "a". Output: 1. */
console.log(map1.get("a"))

/** Hitung jumlah pasangan key-value dalam Map. Output: 3. */
console.log(map1.size)

/** Hapus pasangan dengan key "b". */
map1.delete("b")

/** Setelah key "b" dihapus, Map berisi dua pasangan. Output: 2. */
console.log(map1.size)

/**
 * Hitung kemunculan setiap karakter dalam sebuah string.
 *
 * @param {string} str String yang akan dihitung karakter-karakternya.
 * @returns {Map<string, number>} Map berisi karakter sebagai key dan jumlah kemunculannya sebagai value.
 */
function countCharacters(str = "") {
    const characterCountMap = new Map()

    /** Iterasi setiap karakter pada string. */
    for (const char of str) {
        /** Ambil jumlah lama; gunakan 0 jika karakter belum pernah ditemukan. */
        const count = characterCountMap.get(char) || 0
        /** Simpan jumlah baru untuk karakter tersebut. */
        characterCountMap.set(char, count + 1)
    }

    return characterCountMap
}

/** Hitung karakter pada kata "hello". */
const text = "hello"
const characterCountMap = countCharacters(text)

/**
 * Output Map:
 * Map(4) { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
 * Huruf l muncul dua kali, sedangkan karakter lain masing-masing satu kali.
 * Note: karakter yang sama tidak dihitung sebagai entri duplikat;
 * kemunculannya dijumlahkan pada value Map milik key tersebut.
 */
console.log(characterCountMap)
