module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "@v1/(.*)$": "<rootDir>/v1/$1",
    "@services/(.*)$": "<rootDir>/services/$1",
    "@repositories/*": "<rootDir>/repositories/$1",
    "@entities/(.*)$": "<rootDir>/entities/$1",
    "@utils/(.*)$": "<rootDir>/utils/$1",
  },
}
