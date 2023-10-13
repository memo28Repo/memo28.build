<!--
 * @Author: 邱狮杰
 * @Date: 2023-03-09 11:53:37
 * @LastEditTime: 2023-10-13 18:04:29
 * @Description: 
 * @FilePath: /buildingBlocks/buildingRepo/README.md
-->
# building repo

# link 流程

- 在需要 `link` 的包的`package.json` -> `script` 字段内添加 `links : pnpm link --global`

- 在`/`目录下 执行 `pnpm links`

# publish 流程

- [给自己的 github 仓库配置 npm token](https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages)

- 打包测试

- 更新包版本 `changset add` 和 `changset version`

- 将代码切换到 `main` 分支上

- `push` 支 `git` 仓库让 `action` 帮你完整最后的发包流程

# [分支管理](/docs/branchManagement.md)

# [包管理规范](/docs/packagingSpecification.md)

# [注释生成文档](https://api-extractor.com/pages/overview/intro/)
