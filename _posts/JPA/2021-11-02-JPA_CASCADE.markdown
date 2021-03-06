---
layout: post
title: CASCADE
date: 2021-11-02 09:04 +0900
category: JPA
---

> CASCADE

부모 엔티티가 영속화될 때 자식 엔티티도 같이 영속화되고, 부모 엔티티가 삭제될 때 자식 엔티티도 삭제되는 등 특정 엔티티를 영속 상태로 만들 때 연관된 엔티티도 함께 영속 상태로 전이되는 것을 의미합니다.  
즉, 특정 엔티티에 대해 특정한 작업을 수행하면 관련된 엔티티에도 동일한 작업을 수행한다는 의미입니다.  

# casecade 옵션

* CascadeType.PERSIST
    * 엔티티를 영속화 할 때 연관된 엔티티도 함께 유지 ([* PERSIST의 예상치 못한 동작](https://joont92.github.io/jpa/CascadeType-PERSIST%EB%A5%BC-%ED%95%A8%EB%B6%80%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0/))
    * 연관 엔티티가 DB에 이미 저장이 되어있어도 다시 persist하기 때문에 detached entity passed to persist Exception이 발생함(이경우에는 CascadeType.MERGE를 사용)

* CascadeType.MERGE
    * 엔티티 상태를 병합 할 때, 연관된 엔티티도 함께 병합
    * 트랜잭션이 종료되고 detach 상태에서 엔티티가 merge()를 수행하게 되면 연관 엔티티의 추가 및 수정사항도 함께 적용됨

* CascadeType.REFRESH
    * 엔티티를 새로 고칠 때, 연관된 엔티티도 새로고침

* CascadeType.REMOVE
    * 엔티티를 삭제할 때, 연관된 엔티도 함께 삭제

* CascadeType.DETACH
    * 부모 엔티티가 detach()를 수행하게 되면, 연관된 엔티티도 detach() 상태가 되어 변경사항이 반영되지 않음

* CascadeType.ALL
    * 모든 Cascade 적용

<br/>

### 출처: [https://zzang9ha.tistory.com/350](https://zzang9ha.tistory.com/350) [IT Blog]    
### 출처: [https://prohannah.tistory.com/132](https://prohannah.tistory.com/132) [Hello, Hannah!]
