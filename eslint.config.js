export default [
    {
        files: ["**/*.js"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",

            globals: {
                console: "readonly",
                process: "readonly",
                test: "readonly",
                expect: "readonly"
            }
        },

        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
    }
];
