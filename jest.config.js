module.exports = {
    testPathIgnorePatterns: ['app\dashboard\budget\new\page.jsx', 'app\dashboard\expense\new\page.jsx'],
    setupFilesAfterEnv: ['jest.config.js'],
    moduleNameMapper: {
      // Handle CSS imports (with CSS modules)
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  
      // Handle CSS imports (without CSS modules)
      '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  
      // Handle image imports
      '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    testEnvironment: 'jsdom',
  };
  