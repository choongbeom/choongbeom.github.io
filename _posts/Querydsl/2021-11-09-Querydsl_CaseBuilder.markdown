---
layout: post
title: CaseBuilder
date: 2021-11-09 13:04 +0900
category: QUERYDSL
---

> CaseBuilder

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

  // 응용
  // NumberExpression으로 정의할 경우 Order By 처리가 가능함
  // 특정 값들만 특정지어 정렬할때 사용할 수 있음
  QueryResults<ObjectDto> obj = query.select(Projections.constructor(ObjectDto.class, qObject))
              .from(qObject)
              .where(qObject.annualSpending.ne(0))
              .orderBy(cases.asc())
              .fetchResults();
```

<br/>

> Expressions

com.querydsl.core.types.dsl.Expressions 클래스는 동적인 표현식 생성을 위한 정적 팩토리 클래스다.  
팩토리 메서드는 리턴 타입에 따라 이름을 지었으므로 쉽게 유추할 수 있다.  
일반적으로 동적 경로, 커스텀 구문이나 커스텀 오퍼레이션과 같이 Fluent DSL 형식을 사용할 수 없는 경우에 한해 Expressions 클래스를 사용한다.  
  
다음 표현식을 보자.  
  
```java 
QPerson person = QPerson.person;
person.firstName.startsWith("P");
```

만약 Q타입 생성이 가능하지 않으면 다음과 같이 위와 동일한 표현식을 만들 수 있다.  

```java
Path<Person> person = Expressions.path(Person.class, "person");
Path<String> personFirstName = Expressions.path(String.class, person, "firstName");
Constant<String> constant = Expressions.constant("P");
Expressions.predicate(Ops.STARTS_WITH, personFirstName, constant);
```

Path 인스턴스는 변수와 프로퍼티를 의미하고, Constant는 상수를, Operation은 오퍼레이션을 표현하며, TemplateExpression 인스턴스를 사용해서 String 템플릿으로 표현식을 표현할 수 있다.  


* 참고: [CaseBuilder (Querydsl 4.4.0 API)](https://querydsl.com/static/querydsl/4.4.0/apidocs/com/querydsl/core/types/dsl/CaseBuilder.html)
* 참고: [Querydsl 레퍼런스 - 일반사용법](https://querydsl.com/static/querydsl/4.0.0/reference/ko-KR/html/ch03.html)

<br/>
