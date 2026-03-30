const Sequencer = require("@jest/test-sequencer").default

const startTestFilePaths = [
  
]
const endTestFilePaths = [

]

class CustomSequencer extends Sequencer {
  sort(tests) {
    const startTests = startTestFilePaths
      .map((filePath) => {
        return tests.find((test) => test.path.endsWith(filePath))
      })
      .filter(Boolean)
    const endTests = endTestFilePaths
      .map((filePath) => {
        return tests.find((test) => test.path.endsWith(filePath))
      })
      .filter(Boolean)

    const middleTests = tests.filter((test) =>
      !startTests.includes(test) && !endTests.includes(test)
    );

    return [...startTests, ...middleTests, ...endTests]
  }
}

module.exports = CustomSequencer
