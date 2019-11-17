module.exports = {
  verbose: true,
  clearMocks: false,
  
  collectCoverage: true, // 收集测试覆盖率
  reporters: ["default","jest-junit"],  // jest-junit是test result的分析报表
  collectCoverageFrom: ["lib/**/*.{ts,tsx}","!**/node_modules/**"],  // 计入覆盖率统计的文件
  coverageDirectory: "coverage",  // 覆盖率报告文件夹
  coverageReporters:['text','lcov'],  // 覆盖率分析报告
  
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    // mock模块, mock非js文件导入
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/cssMock.js"
  },
  // 测试用例文件位置
  testMatch: ["<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)"],
  transform: {
    "^.+unit\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"]
};
