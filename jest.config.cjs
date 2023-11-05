/** @type {import('ts-jest').JestConfigWithTsJest} */
import nextJest from "next/jest";
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: "./" });

// Any custom config you want to pass to Jest
const customJestConfig = {
  // The root of your source code, typically /src

  // `<rootDir>` is a token Jest substitutes

  "@/(.*)$": "<rootDir>/src/$1",
  // to obtain access to the matchers.
  setupFilesAfterEnv: ["./tests/setupTests.ts"],
  // Jest transformations -- this adds support for TypeScript

  // using ts-jest

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Runs special logic, such as cleaning up components

  // when using React Testing Library and adds special

  // extended assertions to Jest

  // to obtain access to the matchers.

  // Test spec file resolution pattern

  // Matches parent folder `__tests__` and filename

  // should contain `test` or `spec`.

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
