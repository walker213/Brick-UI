module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  reporters: ["default"],
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    // mock模块
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/cssMock.js"
  },

  testMatch: ["<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)"],
  transform: {
    "^.+unit\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"]
};
