/** Import data JSON sebagai object JavaScript. */
import person from "./data.json"

/** Ubah object JavaScript menjadi teks JSON. */
const jsonString = JSON.stringify(person)
/**
 * Cetak seluruh data sebagai satu baris teks JSON:
 * {"name":"John Doe","age":30,"email":"john@example.com","isSubscribed":true,"hobbies":["Reading","Running","Cooking"],"address":{"city":"New York","zipCode":"10001"}}
 */
console.log(jsonString)

/** Ubah teks JSON kembali menjadi object JavaScript. */
const parsedObject = JSON.parse(jsonString)

/** Cetak nilai properti name, yaitu "John Doe". */
console.log(parsedObject.name)

/** Cetak array hobbies: Reading, Running, dan Cooking. */
console.log(parsedObject.hobbies)
