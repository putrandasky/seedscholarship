module.exports = {
  testRegex: 'resources/assets/js/test/.*.spec.js$',
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/resources/assets/$1',
    '^~/(.*)$': '<rootDir>/resources/assets/js/$1',
  },
};
