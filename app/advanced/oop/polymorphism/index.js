/**
 * Polymorphism (polimorfisme) berarti "banyak bentuk": beberapa class yang berbeda
 * dapat menyediakan method dengan nama yang sama tetapi menghasilkan perilaku yang
 * berbeda sesuai jenis object-nya (method overriding).
 *
 * Dengan polimorfisme, satu fungsi dapat memproses berbagai jenis object secara
 * seragam tanpa perlu rangkaian `if...else` untuk mengecek tipe tiap object.
 */

/**
 * Class dasar `Shape` yang mendefinisikan kontrak method `calculateArea()`.
 */
class Shape {
    /**
     * Membuat bentuk geometri dasar.
     *
     * @param {string} name Nama bentuk.
     */
    constructor(name) {
        this.name = name
    }

    /**
     * Menghitung luas bentuk.
     *
     * @returns {number} Luas bentuk.
     */
    calculateArea() {
        return 0
    }
}

class Rectangle extends Shape {
    /**
     * Membuat persegi panjang.
     *
     * @param {number} width Lebar.
     * @param {number} height Tinggi.
     */
    constructor(width, height) {
        super("Rectangle")
        this.width = width
        this.height = height
    }

    /**
     * Menghitung luas persegi panjang (`width * height`).
     *
     * @returns {number} Luas persegi panjang.
     */
    calculateArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    /**
     * Membuat lingkaran.
     *
     * @param {number} radius Jari-jari lingkaran.
     */
    constructor(radius) {
        super("Circle")
        this.radius = radius
    }

    /**
     * Menghitung luas lingkaran (`PI * r^2`) dibulatkan 2 angka di belakang koma.
     *
     * @returns {number} Luas lingkaran.
     */
    calculateArea() {
        return Number((Math.PI * this.radius ** 2).toFixed(2))
    }
}

class Triangle extends Shape {
    /**
     * Membuat segitiga.
     *
     * @param {number} base Panjang alas.
     * @param {number} height Tinggi segitiga.
     */
    constructor(base, height) {
        super("Triangle")
        this.base = base
        this.height = height
    }

    /**
     * Menghitung luas segitiga (`0.5 * base * height`).
     *
     * @returns {number} Luas segitiga.
     */
    calculateArea() {
        return 0.5 * this.base * this.height
    }
}

/**
 * Fungsi polimorfik yang menerima segala jenis `Shape` dan memanggil
 * `calculateArea()` tanpa perlu tahu detail class turunannya.
 *
 * @param {Shape[]} shapes Daftar instance bentuk geometri.
 * @returns {string[]} Ringkasan luas setiap bentuk.
 */
function formatShapeAreas(shapes) {
    return shapes.map((shape) => `${shape.name}: ${shape.calculateArea()}`)
}

const shapes = [new Rectangle(10, 5), new Circle(4), new Triangle(8, 6)]

console.log(formatShapeAreas(shapes))
// ["Rectangle: 50", "Circle: 50.27", "Triangle: 24"]
