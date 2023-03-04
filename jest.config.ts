/* eslint-disable import/no-default-export */
// jest.config.ts
import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "node",
  transform: { "\\.(jsx?|tsx?)$": "@sucrase/jest-plugin" },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageReporters: ["json", "lcov", "text", "clover", "json-summary"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!astronomia)"],
  testTimeout: 30000,
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
    "esbuild-jest": {
      isolatedModules: true,
    },
  },
};
export default config;
