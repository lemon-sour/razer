module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "silent": false,
  "verbose": false,
  "coverageDirectory": "./coverage/",
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}"
  ]
}
