/** Daftar produk beserta nama dan kategori masing-masing. */
let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
]

/**
 * every() memeriksa semua produk.
 * Hasilnya true hanya jika semua kategori bernilai "Books".
 * Hasil pada data ini adalah false.
 */
let allProductsBooks = products.every((product) => product.category === "Books")

/**
 * some() memeriksa setidaknya satu produk.
 * Hasilnya true jika satu atau lebih kategori bernilai "Books".
 * Hasil pada data ini adalah true.
 */
let someProductsBooks = products.some((product) => product.category === "Books")

/** Output: false, karena tidak semua produk termasuk buku. */
console.log(allProductsBooks)

/** Output: true, karena ada produk dengan kategori "Books". */
console.log(someProductsBooks)
