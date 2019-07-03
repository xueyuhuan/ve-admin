#!/usr/bin/env sh

# ����������ʱ��ֹ�ű�
set -e

# ����
npm run dev-build

# cd �����������Ŀ¼�� 
cd dist

# �����Զ���������
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# ���� https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# ���� https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:xueyuhuan/ve-admin.git master:gh-pages

cd -