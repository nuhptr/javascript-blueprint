/**
 * Destructuring mixture practice menggabungkan object destructuring, array
 * destructuring, nested destructuring, dan rename destructuring dalam satu
 * struktur data realistis menyerupai respons API.
 */

/** Data contoh dengan struktur bersarang (object + array). */
const appData = {
    user: {
        id: 123,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        address: {
            city: "New York",
            country: "USA",
        },
        hobbies: ["Reading", "Painting", "Cooking"],
        scores: {
            math: 95,
            science: 88,
            history: 75,
        },
    },
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 800 },
        { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
        darkMode: true,
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        language: "English",
    },
}

/**
 * Mengekstrak ringkasan data dari struktur `appData` menggunakan kombinasi
 * seluruh teknik destructuring.
 *
 * @param {object} data Data aplikasi yang mengandung user, products, dan settings.
 * @returns {object} Ringkasan data yang sudah diekstrak secara rapi.
 */
function summarizeAppData(data) {
    const {
        user: {
            name,
            age,
            email,
            address: { city, country },
            hobbies: [primaryHobby, ...otherHobbies],
            scores: { math, science, history },
        },
        products: [firstProduct, secondProduct, thirdProduct],
        settings: {
            darkMode,
            notifications: {
                email: emailNotifications,
                sms: smsNotifications,
                push: pushNotifications,
            },
            language,
        },
    } = data

    return {
        userSummary: `${name} (${age}) - ${email}`,
        location: `${city}, ${country}`,
        hobbies: { primaryHobby, otherHobbies },
        scores: { math, science, history },
        featuredProducts: [
            `${firstProduct.name} - $${firstProduct.price}`,
            `${secondProduct.name} - $${secondProduct.price}`,
            `${thirdProduct.name} - $${thirdProduct.price}`,
        ],
        preferences: {
            darkMode,
            language,
            notifications: {
                emailNotifications,
                smsNotifications,
                pushNotifications,
            },
        },
    }
}

const summary = summarizeAppData(appData)

/**
 * Output:
 * {
 *     userSummary: "John Doe (30) - john.doe@example.com",
 *     location: "New York, USA",
 *     hobbies: {
 *         primaryHobby: "Reading",
 *         otherHobbies: ["Painting", "Cooking"],
 *     },
 *     scores: { math: 95, science: 88, history: 75 },
 *     featuredProducts: [
 *         "Laptop - $1000",
 *         "Phone - $800",
 *         "Tablet - $500",
 *     ],
 *     preferences: {
 *         darkMode: true,
 *         language: "English",
 *         notifications: {
 *             emailNotifications: true,
 *             smsNotifications: false,
 *             pushNotifications: true,
 *         },
 *     },
 * }
 */
console.log(summary)
