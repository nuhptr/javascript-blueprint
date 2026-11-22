/**
 * Object destructuring memungkinkan kita mengekstrak properti dari sebuah object
 * ke dalam variabel terpisah berdasarkan nama key propertinya.
 *
 * Berbeda dengan array destructuring, urutan penulisan properti tidak berpengaruh;
 * yang penting nama variabel cocok dengan nama properti pada object.
 */

/**
 * 1. Mengekstrak properti dari object student.
 */
const student = {
    name: "anmastery",
    position: "First",
    rollNumber: "27",
}

const { position, name, rollNumber } = student
console.log(name) // "anmastery"
console.log(position) // "First"
console.log(rollNumber) // "27"

/**
 * 2. Memberikan nilai default saat properti tidak ada atau bernilai `undefined`.
 */
const settings = {
    theme: "dark",
}

const { theme, language = "id" } = settings
console.log(theme) // "dark"
console.log(language) // "id"

/**
 * 3. Latihan: mengambil properti `name`, `age`, dan `country` dari object `person`.
 */
const person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    country: "USA",
}

const { name: personName, age, country } = person
console.log(personName) // "John Doe"
console.log(age) // 30
console.log(country) // "USA"
