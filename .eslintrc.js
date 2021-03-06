module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4,{ "SwitchCase": 1 }
        ],
        // indent: ["error", 2, { "SwitchCase": 1 }]
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "off"
        ],
        "no-console": ["off"]
    },
    "globals":{
        "React":true,
        "ReactDOM":true,
        "contacts":true,
        "contact":true

    }
};