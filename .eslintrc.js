module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:css-modules/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "settings": {
            "import/resolver": {
                "node": {
                    "extensions": [".js", ".jsx", ".ts", ".tsx"]
                }
            }
    },
    "plugins": ["react", "react-hooks", "@typescript-eslint","css-modules"],
    "rules": {
        "import/no-unresolved": "off",
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-use-before-define": 0,
        "jsx-a11y/click-events-have-key-events":0,
        "jsx-a11y/no-static-element-interactions":0,
        "jsx-a11y/no-noninteractive-element-interactions":0,
        "react/jsx-no-target-blank": 0,
        "block-scoped-var": [2],
        "sort-imports": [0],
        "no-use-before-define": 0,
        "no-param-reassign": 0,
        "no-shadow":0,
        "no-unused-vars":0,
        "spaced-comment": 0,
        "camelcase": 0,
        "no-restricted-imports": [1],
        "no-duplicate-imports": 2,
        "no-undef": "off",
        "react/no-unescaped-entities": 0,
        "react/destructuring-assignment": 0,
        "react-hooks/rules-of-hooks": "error",
        "import/extensions": "off",
        "react-hooks/exhaustive-deps": "warn",
        "no-underscore-dangle":0,
        "react/prop-types": [2, { ignore: ['children'] }],
    }

};
