/*
 * @Author: 邱狮杰
 * @Date: 2023-04-16 09:12:02
 * @LastEditTime: 2023-04-16 09:33:29
 * @Description:
 * @FilePath: /baseRepo/commitlint.config.js
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert']],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0],
    'subject-empty': [0],
    'subject-case': [0],
    'header-max-length': [0],
  },
}
