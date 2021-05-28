module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{html,ts}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                "testing": "100px"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};