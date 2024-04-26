/*
 * @Author: 邱狮杰
 * @Date: 2023-03-09 13:45:53
 * @LastEditTime: 2023-12-04 14:18:36
 * @Description:
 * @FilePath: /baseRepo/.cz-config.js
 */
/*
 * @Author: 邱狮杰
 * @Date: 2023-01-19 20:08:07
 * @LastEditTime: 2023-01-19 20:08:09
 * @Description:
 * @FilePath: /memo/.cz-config.js
 */
module.exports = {
  types: [
    { value: ':sparkles:feat', name: 'feat:一个新功能' },
    { value: ':bug:fix', name: 'fix:修复一个bug' },
    { value: ':memo:docs', name: 'docs:仅文档更改' },
    {
      value: ':lipstick:style',
      name: 'style:不影响代码含义的更改\n（空格、格式、缺少分号等）',
    },
    {
      value: ':recycle:refactor',
      name: 'refactor: 既不修复错误也不添加功能的代码更改',
    },
    {
      value: ':zap:perf',
      name: 'perf:提高性能的代码更改',
    },
    { value: ':test_tube:test', name: 'test:添加缺失的测试' },
    {
      value: ':building_construction:chore',
      name: 'chore:对构建过程或辅助工具的更改\n 以及文档生成等库',
    },
    { value: ':rewind:revert', name: 'revert:恢复到提交' },
  ],

  // scopes: [{ name: '帐户' }, { name: '行政' }, { name: '示例范围' }, { name: 'changeMe' }],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
  // override the messages, defaults are as follows
  messages: {
    type: '选择您要提交的更改类型：',
    scope: '\n表示此更改的范围（可选）：',
    // used if allowCustomScopes is true
    customScope: '表示此更改的范围：',
    subject: '写一个简短的、命令式的时态描述更改：\n',
    body: '提供更长的更改描述（可选）。 使用“|” 换行：\n',
    breaking: '列出所有重大更改（可选）：\n',
    footer: '列出此更改关闭的所有问题（可选）。 例如：#31、#34：\n',
    confirmCommit: '你确定要继续上面的提交吗？',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 200,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
