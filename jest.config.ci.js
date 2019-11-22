const base = require('./jest.config')

module.exports = Object.assign({}, base, {
  collectCoverage: true, // 收集测试覆盖率
  reporters: ["jest-junit"],  // jest-junit是test result的分析报表，一般生成给CI用
  collectCoverageFrom: ["lib/**/*.{ts,tsx}","!**/node_modules/**"],  // 计入覆盖率统计的文件
  coverageDirectory: "coverage",  // 覆盖率报告文件夹
  coverageReporters:['text','lcov'],  // 覆盖率分析报告
});
