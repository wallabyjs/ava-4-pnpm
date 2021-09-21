module.exports =  (wallaby) => {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.spec.js'
    ],
    tests: [
      'src/**/*.spec.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'ava',
    debug: true
  };
};