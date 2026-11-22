/**
 * Function destructuring memungkinkan kita membongkar properti object atau elemen
 * array langsung pada daftar parameter fungsi.
 *
 * Pola ini membuat fungsi lebih ringkas, mendukung nilai default per properti,
 * dan memudahkan pemanggilan tanpa harus mengingat urutan argumen.
 */

/**
 * 1. Menampilkan informasi personal dari object yang didestrukturisasi di parameter.
 *
 * @param {object} person Data personal.
 * @param {string} person.name Nama lengkap.
 * @param {number} person.age Usia.
 * @param {string} person.country Negara asal.
 * @returns {string} Ringkasan informasi personal.
 */
function formatPersonInfo({ name, age, country }) {
    return `Name: ${name}, Age: ${age}, Country: ${country}`
}

const person = {
    name: "John Doe",
    age: 30,
    country: "USA",
}

console.log(formatPersonInfo(person)) // "Name: John Doe, Age: 30, Country: USA"

/**
 * 2. Destructuring parameter dengan nilai default, rename, dan nested array.
 * Menambahkan `= {}` pada parameter mencegah error jika fungsi dipanggil tanpa argumen.
 *
 * @param {object} [options={}] Opsi konfigurasi menu.
 * @param {string} [options.title="Untitled"] Judul menu.
 * @param {number} [options.width=100] Lebar menu dalam piksel.
 * @param {number} [options.height=200] Tinggi menu dalam piksel.
 * @param {string[]} [options.items=[]] Daftar item menu.
 * @returns {object} Konfigurasi menu yang sudah dinormalisasi.
 */
function createMenuConfig({
    title = "Untitled",
    width: menuWidth = 100,
    height: menuHeight = 200,
    items: [firstItem = "None", secondItem = "None"] = [],
} = {}) {
    return {
        title,
        size: `${menuWidth}x${menuHeight}`,
        featuredItems: [firstItem, secondItem],
    }
}

const menuOptions = {
    title: "My Menu",
    items: ["Item1", "Item2"],
}

console.log(createMenuConfig(menuOptions))
// { title: "My Menu", size: "100x200", featuredItems: ["Item1", "Item2"] }
console.log(createMenuConfig())
// { title: "Untitled", size: "100x200", featuredItems: ["None", "None"] }

/**
 * 3. Latihan: mengambil `name`, `age`, dan `courses` dari object `student`
 * menggunakan function destructuring lalu mengembalikannya sebagai object baru.
 *
 * @param {object} student Data siswa lengkap.
 * @param {string} student.name Nama siswa.
 * @param {number} student.age Usia siswa.
 * @param {string[]} student.courses Daftar mata pelajaran siswa.
 * @returns {{ name: string, age: number, courses: string[] }} Ringkasan data siswa.
 */
function getStudentInfo({ name, age, courses }) {
    return { name, age, courses }
}

const student = {
    name: "John Doe",
    age: 20,
    rollNumber: "A123",
    courses: ["Mathematics", "Science", "History"],
}

const { name, age, courses } = getStudentInfo(student)
console.log(name) // "John Doe"
console.log(age) // 20
console.log(courses) // ["Mathematics", "Science", "History"]
