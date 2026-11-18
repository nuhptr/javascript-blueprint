/**
 * Template literal memakai backtick (`) dan dapat ditulis dalam beberapa baris.
 * Baris baru di dalam string akan ikut menjadi bagian dari nilainya.
 */
let text = `The quick
brown fox
jumps over
the lazy dog`

/** Simpan nama depan dan nama belakang pada variabel terpisah. */
let firstName = "John"
let lastName = "Doe"

/**
 * Sisipkan nilai variabel ke dalam template literal dengan ${...}.
 * Nilai text2 menjadi "Welcome John, Doe!".
 */
let text2 = `Welcome ${firstName}, ${lastName}!`
