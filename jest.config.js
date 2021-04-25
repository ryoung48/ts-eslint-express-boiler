module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts', '!src/index.ts', '!src/app.ts'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
}
