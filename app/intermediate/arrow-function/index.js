/**
 * Contoh arrow function dengan setTimeout().
 *
 * () => { ... } adalah arrow function yang menjalankan callback tanpa
 * menerima parameter. Angka 2000 pada setTimeout berarti jeda 2000 ms atau
 * 2 detik.
 */

/**
 * Jalankan callback setelah 2 detik.
 * Output: "Hello".
 */
setTimeout(() => {
    console.log("Hello")

    /**
     * setTimeout berikut dijalankan setelah "Hello" dicetak.
     * Output: "Hey".
     */
    setTimeout(() => {
        console.log("Hey")

        /**
         * Bersarang (nested) seperti ini membentuk callback sequence.
         * Bentuknya berurutan, tetapi nesting dapat sulit dibaca jika bertambah dalam.
         * Output: "Namaste".
         */
        setTimeout(() => {
            console.log("Namaste")

            /** Output: "Hi". */
            setTimeout(() => {
                console.log("Hi")

                /** Output: "Salam". */
                setTimeout(() => {
                    console.log("Salam")

                    /** Output terakhir setelah 2 detik: "Bonjour". */
                    setTimeout(() => {
                        console.log("Bonjour")
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)
