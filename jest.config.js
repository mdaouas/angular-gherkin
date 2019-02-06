module.exports = {
  roots: ['src'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/*.ts',
    '!src/**/*d.ts',
    '!src/environments/*',
    '!src/**/*module.ts',
  ],
  coverageThreshold: {
    global: {
      functions: 95,
      lines: 95,
      statements: 95,
      branches: 80,
    },
  },
};
