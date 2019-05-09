module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['./enzyme.config.js'],
    moduleNameMapper: {
        '\\.(s?css)$': '<rootDir>/__mocks__/styleMock.js',
    },
    snapshotSerializers: ['enzyme-to-json/serializer']
};
