module.exports = {
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        ignoreFiles: ['**/*.css'],
      },
    ],
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
};
