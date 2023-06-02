module.exports = (commitlint) => {
  const jiraPattern = /\b[A-Z]+-\d+\b/;

  // 加载插件
  commitlint.loadPlugin('jira-plugin');

  // 定义自定义规则
  commitlint.loadRules({
    'jira-task-id': (parsed, when) => {
      const message = parsed.header;
      if (!message) {
        return [false, '提交消息不能为空'];
      }
      if (when === 'always' && !jiraPattern.test(message)) {
        return [
          false,
          `提交消息必须包含JIRA任务号，例如：ABC-123`,
        ];
      }
      return [true];
    },
  });
};
