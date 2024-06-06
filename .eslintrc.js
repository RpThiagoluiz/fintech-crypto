module.exports = {
   root: true,
   extends: ['universe', 'universe/native'],
   ignorePatterns: ['.config/*'],
   rules: {
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      indent: ['error', 3],
      'no-console': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'import/order': [
         'error',
         {
            alphabetize: { order: 'asc', caseInsensitive: true },
            groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object'],
            'newlines-between': 'always',
            warnOnUnassignedImports: true,
         },
      ],
      'prettier/prettier': [
         'error',
         {
            endOfLine: 'auto',
         },
      ],
   },
};
