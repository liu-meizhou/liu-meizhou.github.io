#!/usr/bin/env sh

# 忽略错误
set -e

rm -rf ./.vitepress/.temp
rm -rf ./.vitepress/dist

# 构建
pnpm build

# 进入待发布的目录
cd ./.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init -b master
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
git push -f git@github.com:liu-meizhou/liu-meizhou.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 删除dist文件的.git
rm -rf .git

cd -
