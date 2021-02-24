### git的使用
## 在工作中开发的时候，一般都是多分支开发的，有一个master主分支，那上边存储的都是最干净，最纯洁的代码，也就是线上服务器跑着的代码

## 正常开发的时候一般都是在别的分支上进行开发的，当开发完成之后，测试也没有问题了，上线，上线之后也没有问题了，那就把当前分支的代码合并到master主分支上

## 在分支上开发的时候，第一件事就是先merge一遍master上的代码，保证当前分支的代码和master上的代码同步，-->进行正常的需求开发-->当开发完成之后，把当前分支的代码在merge到master分支上

git branch 查看当前的分支  带*的就是你当前所处的分支
git branch dev 创建一个叫做dev的新分支
git checkout dev 切换到dev分支上

git add .
git commit -m''
git push origin dev


git checkout master 切换到master仓库上

git merge dev

git push origin master




<!-- /////////////////////////////////////////////////// -->

git checkout -b dev 创建一个dev分支并且切换到这个分支上

git merge dev   把dev的代码合并到当前你所处的分支上

// 一定要谨记，在某个分支上开发之前，一定要先merge一下master上的代码(就是为了防止当前的分支上的代码不是最新的)