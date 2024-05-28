module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
        project: './tsconfig.json',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'airbnb',
        'airbnb-typescript',
        'next',
        'prettier',
    ],
    plugins: ['jest', 'eslint-plugin-import-helpers'],
    globals: {
        ByDevice: true,
        Byside: true,
        Console: true,
        Deskum: true,
        jQuery: true,
        $: true,
    },
    rules: {
        'class-methods-use-this': 'warn',
        'import/no-cycle': 'off',
        'import-helpers/order-imports': [
            'warn',
            {
                groups: [
                    ['/^react$/', '/react-dom/', '/^next$/', '/^next//', '/prop-types/', '/styled-components/'],
                    '/^@testing-library/',
                    'module',
                    '/^@sidetalk/',
                    '/^@/',
                    ['parent', 'sibling', 'index'],
                ],
            },
        ],
        'import/extensions': [
            'error',
            'never',
            {
                mjs: 'always',
                json: 'always',
            },
        ],
        'import/prefer-default-export': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/interactive-supports-focus': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/no-autofocus': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/tabindex-no-positive': 0,
        'max-len': ['error', { code: 120, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
        'no-nested-ternary': 'warn',
        'no-param-reassign': 'warn',
        'no-underscore-dangle': 'warn',
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-no-bind': 'warn',
        'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    },
    settings: {
        'import/resolver': {
            alias: [
                ['@theme', './src/styles/theme'],
                ['@styles', './src/styles'],
                ['@components', './src/console/components'],
                ['@contexts', './src/console/contexts'],
                ['@helpers', './src/console/helpers'],
                ['@hooks', './src/console/hooks'],
                ['@console', './src/console'],
                ['@device', './src/device'],
                ['@services', './src/services'],
                ['@src', './src'],
                ['@static', './public/static'],
                ['@tests', './__tests__'],
                ['visitor-sidebar-components$', './src/console/components/VisitorSidebar/components/index'],
                ['byside-survey', './public/static/scripts/byside.survey.js'],
                ['noty$', './public/static/scripts/vendor/noty/2.3.8/jquery.noty.packaged.min.js'],
            ],
        },
    },
};