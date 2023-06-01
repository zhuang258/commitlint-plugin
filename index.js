const load = require('@commitlint/load').default;
const lint = require('@commitlint/lint').default;

const prefix = require('./prefix');

module.exports = {
  rules: {
    prefix: prefix(['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']),
  },
  config: load({
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']],
    },
  }).then(config => {
    lint('test: add new feature', config.rules).then(result =>
      console.log(result)
    );
  }),
};
