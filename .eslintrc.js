module.exports = {
   root: true,
   extends: ['universe/native'],
   ignorePatterns: ['.config/*'],
   rules: {
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      indent: ['error', 3],
      'no-console': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'prettier/prettier': [
         'error',
         {
            endOfLine: 'auto',
         },
      ],
   },
};
