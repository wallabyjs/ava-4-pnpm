export default function(wallaby) {
  return {
    files: [
      'package.json',
      'src/**/*.js',
      '!src/**/*.spec.js'
    ],
    tests: [
      'src/**/*.spec.js'
    ],
    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--experimental-vm-modules'
      }
    },
    testFramework: 'ava',
    debug: true
  };
};
