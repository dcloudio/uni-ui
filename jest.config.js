const path = require('path')

module.exports = {
    testTimeout: 30000,
    reporters: ['default'],
    watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
    moduleFileExtensions: ['js', 'json'],
    rootDir: __dirname,
    testMatch: [
      "<rootDir>/pages/number-box/number-box.test.js"
    ],
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testSequencer: path.join(__dirname, "testSequencer.js")
}