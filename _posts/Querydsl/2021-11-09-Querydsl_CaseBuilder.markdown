---
layout: post
title: CaseBuilder
date: 2021-11-09 13:04 +0900
category: QUERYDSL
---

> Querydsl 자료

Querydsl에서 CASE - WHEN 구문을 사용하기 위해서는 CaseBuilder()를 사용해야 합니다.

아래는 사용법에 따른 예시입니다.

```java
  QObject qObject = QObject.object;

  // case 조건에 대한 문자 정의
  Expression<String> cases = new CaseBuilder()
     .when(qObject.annualSpending.gt(10000)).then("Premier")
     .when(qObject.annualSpending.gt(5000)).then("Gold")
     .when(qObject.annualSpending.gt(2000)).then("Silver")
     .otherwise("Bronze");

  // case 조건에 대한 정수 정의
  NumberExpression<Integer> cases = new CaseBuilder()
     .when(qObject.annualSpending.eq("Premier")).then(10000)
     .when(qObject.annualSpending.eq("Gold")).then(5000)
     .when(qObject.annualSpending.eq("Silver")).then(2000)
     .otherwise(1000);
  
  // 다른 사용방법 예제
  QueryResults<ObjectDto> obj = query.select(Projections.constructor(ObjectDto.class, qObject, 
        new CaseBuilder()
          .when(qObject.annualSpending.gt(10000)).then("Premier")
          .when(qObject.annualSpending.gt(5000)).then("Gold")
          .when(qObject.annualSpending.gt(2000)).then("Silver")
          .otherwise("Bronze")
         ))
        .from(qObject)
        .where(qObject.annualSpending.ne(0))
        .orderBy(cases.asc())
        .fetchResults();

  // 응용처리
  // NumberExpression으로 정의할 경우 Order By 처리가 가능함
  // 특정 값들만 특정지어 정렬할때 사용할 수 있음
  QueryResults<ObjectDto> obj = query.select(Projections.constructor(ObjectDto.class, qObject))
              .from(qObject)
              .where(qObject.annualSpending.ne(0))
              .orderBy(cases.asc())
              .fetchResults();
```

* 참고: [CaseBuilder (Querydsl 4.4.0 API)](https://querydsl.com/static/querydsl/4.4.0/apidocs/com/querydsl/core/types/dsl/CaseBuilder.html)

<br/>
