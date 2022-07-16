import { Config } from 'jest'

export default {
  preset: 'ts-jest',
  clearMocks: true,
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['packages/**/*.{ts,tsx,js,jsx}'],
  coveragePathIgnorePatterns: ['jest.config.ts', '/node_modules/', '/dist/'],
  moduleNameMapper: {
    '^@monorepo/(.*)$': '<rootDir>/packages/$1/'
  }
} as Config
