module.exports = {
    "parser": "babel-eslint",
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "plugins": ["react", "jsx-a11y"],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/prop-types": 0,
        "linebreak-style": 1,
    }
};