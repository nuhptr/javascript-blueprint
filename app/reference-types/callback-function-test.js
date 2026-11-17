/**
 * Panggil callback dengan nilai 10, lalu kembalikan hasil callback tersebut.
 *
 * @param {(value: number) => unknown} fn Function yang dipanggil sebagai callback.
 * @returns {unknown} Nilai yang dikembalikan oleh callback.
 */
function callbackFunction(fn) {
    const value = 10
    return fn(value)
}

/**
 * Function panah ini menjadi callback.
 * Parameter `value` menerima nilai 10 dari callbackFunction.
 */
callbackFunction((value) => {
    console.log(value)
})
