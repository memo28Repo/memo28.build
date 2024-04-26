###
# @Author: 邱狮杰
# @Date: 2023-04-16 09:03:29
 # @LastEditTime: 2024-04-26 14:08:14
# @Description:
 # @FilePath: /monorepo-template/script/create.sh
###

mkdir etc

mkdir src

touch src/index.ts

# 初始化 package.json
pnpm init

# 初始化 tsconfig.json 文件
tsc --init

# 打包 comonjs 规范代码
npm pkg set scripts.build:cjs='tsc --module commonjs --rootDir ./src --outDir ./lib --experimentalDecorators true'

#  打包 es 规范代码
npm pkg set scripts.build:es='tsc --module es6 --rootDir ./src --outDir ./dist --experimentalDecorators true'

# 打包 commonjs 和 es 规范的代码
npm pkg set scripts.build="pnpm build:cjs && pnpm build:es"

# 打包 并 根据 API 生成文档
npm pkg set scripts.build:md="pnpm build && api-extractor run --local --verbose && sh mv.sh"

# 启动 vitest 只执行一次
npm pkg set scripts.test="vitest run"

# 删除当前package的依赖
npm pkg set scripts.rmDeps="rm -rf ./node_modules"

# 启动 vitest watch 模式
npm pkg set scripts.test:watch="vitest"

# 启动 vitest 以 ui 模式运行
npm pkg set scripts.test:ui="vitest --ui"

# 将 包 link 到 pnpm store
npm pkg set scripts.links="pnpm link --global"

# 更新现在依赖
npm pkg set scripts.updateDep=""
