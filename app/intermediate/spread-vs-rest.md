# Perbedaan Spread Operator dan Rest Operator (`...`)

Di JavaScript, **spread operator** dan **rest operator** sama-sama menggunakan sintaks tiga titik (`...`), tetapi fungsi dan posisinya **saling berlawanan**:

- **Spread operator** **memecah (menyebarkan)** satu array, string, atau object menjadi beberapa elemen/properti terpisah.
- **Rest operator** **mengumpulkan (menggabungkan)** sisa argumen, elemen, atau properti menjadi satu array atau object.

---

## Ringkasan Perbandingan

| Aspek | Spread Operator (`...`) | Rest Operator (`...`) |
| --- | --- | --- |
| **Arah kerja** | Memecah satu struktur data menjadi banyak nilai | Mengumpulkan banyak nilai sisa menjadi satu struktur data |
| **Posisi umum** | Sisi **kanan** `=`, literal array/object, atau **saat memanggil fungsi** | Sisi **kiri** `=` (destructuring) atau pada **definisi parameter fungsi** |
| **Tipe sumber/hasil** | Memecah iterable (array, string) atau object | Menghasilkan **array** (pada fungsi & array destructuring) atau **object** (pada object destructuring) |
| **Aturan posisi** | Boleh diletakkan di awal, tengah, atau akhir | **Wajib** diletakkan di posisi paling akhir |
| **Kasus paling umum** | Salin (*shallow copy*), gabung array/object, kirim array sebagai argumen | Variadic function (`sum(...nums)`), memisahkan data utama dan sisanya |

---

## 1. Spread Operator — Memecah Data

Spread digunakan ketika kamu sudah punya **satu wadah** (array/object/string) dan ingin **mengeluarkan isinya**.

### a. Menyalin dan menggabungkan array

```js
const first = [1, 2, 3]
const second = [4, 5]

const merged = [0, ...first, ...second, 6]
console.log(merged) // [0, 1, 2, 3, 4, 5, 6]
```

### b. Menyalin dan memperbarui object secara immutable

```js
const user = {
    name: "anmastery",
    role: "member",
}

const updatedUser = {
    ...user,
    role: "admin",
}

console.log(updatedUser) // { name: "anmastery", role: "admin" }
```

### c. Mengirim elemen array sebagai argumen fungsi

```js
const scores = [78, 92, 85, 96]
const highestScore = Math.max(...scores)

console.log(highestScore) // 96
```

> **Catatan:** Spread hanya melakukan **shallow copy** (salinan dangkal pada level pertama). Properti bertingkat (*nested object*) masih berbagi referensi yang sama kecuali ikut disalin dengan spread.

---

## 2. Rest Operator — Mengumpulkan Sisa Data

Rest digunakan ketika kamu menerima **banyak nilai** dan ingin **menampung sisanya ke dalam satu variabel**.

### a. Pada parameter fungsi (variadic function)

```js
function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0)
}

console.log(sum(1, 2, 3, 4)) // 10
```

### b. Digabung dengan parameter biasa (rest harus di akhir)

```js
function createProfile(name, ...hobbies) {
    return { name, hobbies }
}

console.log(createProfile("anmastery", "coding", "reading"))
// { name: "anmastery", hobbies: ["coding", "reading"] }
```

### c. Pada destructuring array dan object

```js
const [firstColor, ...remainingColors] = ["red", "green", "blue"]
console.log(firstColor) // "red"
console.log(remainingColors) // ["green", "blue"]

const { name, ...otherDetails } = {
    name: "anmastery",
    age: 22,
    role: "developer",
}
console.log(name) // "anmastery"
console.log(otherDetails) // { age: 22, role: "developer" }
```

> **Aturan penting:** Menaruh rest sebelum elemen lain akan menghasilkan `SyntaxError`, misalnya `function test(...args, last)` atau `const [...head, tail] = [1, 2, 3]` tidak valid.

---

## 3. Cara Cepat Membedakannya

Gunakan aturan sederhana ini saat membaca kode:

1. **Pada fungsi:**
   - Di **definisi parameter** (`function fn(...args)`) → **Rest** (mengumpulkan argumen).
   - Di **pemanggilan fungsi** (`fn(...values)`) → **Spread** (memecah array jadi argumen).
2. **Pada assignment (`=`):**
   - Di **sisi kiri** (`const [a, ...rest] = arr`) → **Rest** (menangkap sisa).
   - Di **sisi kanan** (`const copy = [...arr]`) → **Spread** (menyebarkan isi).

### Contoh keduanya dalam satu kode

```js
// REST: mengumpulkan semua argumen menjadi array `numbers`
function multiplyAll(factor, ...numbers) {
    return numbers.map((num) => num * factor)
}

const baseNumbers = [2, 4, 6]

// SPREAD: memecah array `baseNumbers` menjadi argumen terpisah (2, 4, 6)
const doubled = multiplyAll(2, ...baseNumbers)
console.log(doubled) // [4, 8, 12]
```

---

## Lihat Contoh Kode Lengkap

- [spread-operator/index.js](spread-operator/index.js)
- [rest-operator/index.js](rest-operator/index.js)
