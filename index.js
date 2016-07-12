module.exports = {

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },

  env: {
    node: true,
    es6: true
  },

  rules: {

    // Possible Errors
    'comma-dangle': [ 'error', 'never' ],
    'no-cond-assign': [ 'error' ],
    'no-console': [ 'error' ],
    'no-constant-condition': [ 'error' ],
    'no-control-regex': [ 'error' ],
    'no-debugger': [ 'error' ],
    'no-dupe-args': [ 'error' ],
    'no-dupe-keys': [ 'error' ],
    'no-duplicate-case': [ 'error' ],
    'no-empty': [ 'error' ],
    'no-empty-character-class': [ 'error' ],
    'no-ex-assign': [ 'error' ],
    'no-extra-boolean-cast': [ 'error' ],
    'no-extra-parens': [ 'error' ],
    'no-extra-semi': [ 'error' ],
    'no-func-assign': [ 'error' ],
    'no-inner-declarations': [ 'error' ],
    'no-invalid-regexp': [ 'error' ],
    'no-irregular-whitespace': [ 'error' ],
    'no-negated-in-lhs': [ 'error' ],
    'no-obj-calls': [ 'error' ],
    'no-prototype-builtins': [ 'error', 'never' ],
    'no-regex-spaces': [ 'error' ],
    'no-sparse-arrays': [ 'error' ],
    'no-unexpected-multiline': [ 'error' ],
    'no-unreachable': [ 'error' ],
    'no-unsafe-finally': [ 'error' ],
    'use-isnan': [ 'error' ],
    'valid-typeof': [ 'error' ],

    // Best Practices
    'accessor-pairs': [ 'error' ],
    'array-callback-return': [ 'error' ],
    'block-scoped-var': [ 'error' ],
    'complexity': [ 'off' ],
    'consistent-return': [ 'error' ],
    'curly': [ 'error' ],
    'default-case': [ 'error' ],
    'dot-location': [ 'error', 'property' ],
    'dot-notation': [ 'error' ],
    'eqeqeq': [ 'error', 'allow-null' ],
    'guard-for-in': [ 'error' ],
    'no-caller': [ 'error' ],
    'no-case-declarations': [ 'error' ],
    'no-div-regex': [ 'error' ],
    'no-else-return': [ 'error' ],
    'no-empty-function': [ 'error' ],
    'no-empty-pattern': [ 'error' ],
    'no-eval': [ 'error' ],
    'no-extend-native': [ 'error' ],
    'no-extra-bind': [ 'error' ],
    'no-extra-label': [ 'error' ],
    'no-fallthrough': [ 'error' ],
    'no-floating-decimal': [ 'error' ],
    'no-implicit-coercion': [ 'error' ],
    'no-implicit-globals': [ 'error' ],
    'no-implied-eval': [ 'error' ],
    'no-invalid-this': [ 'error' ],
    'no-iterator': [ 'error' ],
    'no-labels': [ 'error' ],
    'no-lone-blocks': [ 'error' ],
    'no-loop-func': [ 'error' ],
    'no-multi-spaces': [ 'error' ],
    'no-multi-str': [ 'error' ],
    'no-native-reassign': [ 'error' ],
    'no-new': [ 'error' ],
    'no-new-func': [ 'error' ],
    'no-new-wrappers': [ 'error' ],
    'no-octal': [ 'error' ],
    'no-octal-escape': [ 'error' ],
    'no-proto': [ 'error' ],
    'no-redeclare': [ 'error' ],
    'no-return-assign': [ 'error' ],
    'no-script-url': [ 'error' ],
    'no-self-assign': [ 'error' ],
    'no-self-compare': [ 'error' ],
    'no-sequences': [ 'error' ],
    'no-throw-literal': [ 'error' ],
    'no-unused-expressions': [ 'error', { "allowShortCircuit": true, "allowTernary": true } ],
    'no-unused-labels': [ 'error' ],
    'no-useless-call': [ 'error' ],
    'no-useless-concat': [ 'error' ],
    'no-useless-escape': [ 'error' ],
    'no-void': [ 'error' ],
    'no-with': [ 'error' ],
    'radix': [ 'error' ],
    'wrap-iife': [ 'error' ],
    'yoda': [ 'error', 'never' ],

    // Strict Mode
    'strict': [ 'error' ],

    // Variables
    'no-catch-shadow': [ 'error' ],
    'no-delete-var': [ 'error' ],
    'no-label-var': [ 'error' ],
    'no-restricted-globals': [ 'error' ],
    'no-shadow': [ 'error' ],
    'no-shadow-restricted-names': [ 'error' ],
    'no-undef': [ 'error' ],
    'no-undef-init': [ 'error' ],
    'no-unused-vars': [ 'error' ],
    'no-use-before-define': [ 'error', { functions: false } ],

    // Node.js and CommonJS
    'callback-return': [ 'error' ],
    'handle-callback-err': [ 'error' ],
    'no-mixed-requires': [ 'error', { grouping: true, allowCall: true } ],
    'no-new-require': [ 'error' ],
    'no-path-concat': [ 'error' ],
    'no-process-exit': [ 'error' ],

    // Stylistic Issues
    'array-bracket-spacing': [ 'error', 'always' ],
    'block-spacing': [ 'error' ],
    'brace-style': [ 'error' ],
    'camelcase': [ 'error' ],
    'comma-spacing': [ 'error' ],
    'comma-style': [ 'error' ],
    'computed-property-spacing': [ 'error' ],
    'consistent-this': [ 'error' ],
    'eol-last': [ 'error' ],
    'indent': [ 'error', 2 ],
    'key-spacing': [ 'error' ],
    'keyword-spacing': [ 'error' ],
    'linebreak-style': [ 'error', 'unix' ],
    'max-len': [ 'error', 120, { ignoreUrls: true } ],
    'max-statements-per-line': [ 'error' ],
    'new-cap': [ 'error' ],
    'new-parens': [ 'error' ],
    'newline-per-chained-call': [ 'error' ],
    'no-array-constructor': [ 'error' ],
    'no-bitwise': [ 'error' ],
    'no-lonely-if': [ 'error' ],
    'no-mixed-operators': [ 'error' ],
    'no-mixed-spaces-and-tabs': [ 'error' ],
    'no-multiple-empty-lines': [ 'error' ],
    'no-nested-ternary': [ 'error' ],
    'no-new-object': [ 'error' ],
    'no-plusplus': [ 'error' ],
    'no-spaced-func': [ 'error' ],
    'no-trailing-spaces': [ 'error' ],
    'no-underscore-dangle': [ 'error' ],
    'no-unneeded-ternary': [ 'error' ],
    'no-whitespace-before-property': [ 'error' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'one-var': [ 'error', 'never' ],
    'one-var-declaration-per-line': [ 'error', 'always' ],
    'operator-linebreak': [ 'error' ],
    'quote-props': [ 'error', 'as-needed' ],
    'quotes': [ 'error', 'single', { avoidEscape: true, allowTemplateLiterals: true } ],
    'semi': [ 'error' ],
    'semi-spacing': [ 'error' ],
    'space-before-blocks': [ 'error' ],
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': [ 'error' ],
    'space-infix-ops': [ 'error' ],
    'space-unary-ops': [ 'error' ],
    'spaced-comment': [ 'error' ],
    'unicode-bom': [ 'error' ],

    // ECMAScript 6
    'arrow-parens': [ 'error' ],
    'arrow-spacing': [ 'error' ],
    'constructor-super': [ 'error' ],
    'generator-star-spacing': [ 'error' ],
    'no-class-assign': [ 'error' ],
    'no-confusing-arrow': [ 'error' ],
    'no-const-assign': [ 'error' ],
    'no-dupe-class-members': [ 'error' ],
    'no-duplicate-imports': [ 'error' ],
    'no-new-symbol': [ 'error' ],
    'no-restricted-imports': [ 'error' ],
    'no-this-before-super': [ 'error' ],
    'no-useless-computed-key': [ 'error' ],
    'no-useless-constructor': [ 'error' ],
    'no-useless-rename': [ 'error' ],
    'no-var': [ 'error' ],
    'object-shorthand': [ 'error' ],
    'prefer-arrow-callback': [ 'error', { allowNamedFunctions: true } ],
    'prefer-reflect': [ 'error' ],
    'prefer-rest-params': [ 'error' ],
    'prefer-spread': [ 'error' ],
    'prefer-template': [ 'error' ],
    'require-yield': [ 'error' ],
    'rest-spread-spacing': [ 'error' ],
    'template-curly-spacing': [ 'error', 'always' ],
    'yield-star-spacing': [ 'error' ],
  }

};
