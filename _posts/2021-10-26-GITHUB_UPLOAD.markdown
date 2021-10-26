---
layout: post
title: Github 업로드
date: 2021-10-26 09:39 +0900
category: Github
---

> Github 업로드

```
$ git status                                                // 현재 상태 확인 
$ git add .                                                 // 수정된 모든 파일 스테이지 
$ git commit -m "메모"                                      // 커밋
$ git push origin master
```
<br/>  

> Github 폴더 업로드

```
$ cd 폴더이름                                                // 폴더로 이동
$ git status                                                // 현재 상태 확인 
$ git add .                                                 // 폴더의 모든 파일 스테이지
$ git commit -m "메모"                                      // 커밋
$ git remote add origin https://github.com/리포지토리주소    // 리포지토리 연결
$ git push origin master
```

