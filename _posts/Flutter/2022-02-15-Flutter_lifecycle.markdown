---
layout: post
title: Stateful Widget Lifecycle(생명주기)
date: 2022-02-15 11:00 +0900
category: Flutter
---

> Stateful Widget Lifecycle(생명주기)

플러터가 StatefulWidget을 만들 때, State객체를 만든다. 이 개체는 해당 위젯의 모든 가변 상태가 유지 되는 곳이다.  

* state의 개념은 두 가지로 정의 된다:
  1. 위젯이 사용하는 데이터는 변경 될 수 있다.
  2. 위젯이 빌드 될때 데이터를 동시에(synchronously) 읽을 수 없다. (모든 state는 build 메서드가 호출 될때 까지 설정 되어야 한다.)

<br/>

* 라이프 싸이클은 다음과 같은 간단한 단계를 포함하고 있다.

  * createState()
  * mounted == true
  * initState()
  * didChangeDependencies()
  * build()
  * didUpdateWidget()
  * setState()
  * deactivate()
  * dispose()
  * mounted == false
  
<br/>

* StatefulWidget 과 State 클래스는 별도로 분리되었는가?

  한마디로 말하면 성능이다.  
  State객체는 오래 유지되지만 StatefulWidgets(및 모든 Widget의 서브클래스)는 구성이 변경 될때마다 폐기하고 다시 작성된다. 플러터가 변경 가능한(mutable) 위젯을 다시 작성하는것은 매우 저렴하다.  
  State는 재구축(rebuild)할때 마다 폐기되지 않으므로 비용 큰 계산을 피할 수 있으며 프레임별로(frame)로 프레임이 재구성 될때 마다 state속성, getter, setter등에서 가져온다.  
  중요한것은 이것이 플러터 애니메이션을 존재하도록 한다는 것이다. State는 폐기되지 않으므로 데이터 변경에 대한 응답으로 필요할 때 언제든지 위젯을 재 구성 할 수 있다.  
<br/>

* createState()  

  플러터가 StatefulWidget을 빌드하도록 지시하면 즉시 [createState()]가 호출된다. 이 메서드는 반드시 존재해야 한다.(역자주: createState()를 말함) StatefulWidget은 이것보다 더 복잡할 필요가 거의 없다.  

```dart
class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => new _MyHomePageState();
}
```
<br/>

* mounted is true  

  createState가 state클래스를 생성하면 buildContext는 state에 할당 된다.  
  BuildContext는 위젯이 배치된 위젯 트리의 위치를 단순화 한 것이다.  
  
  모든 위젯은 bool형식의 this.mounted 속성을 가지고 있다. buildContext가 할당되면 true를 리턴한다. 위젯이 unmounted상태일때 setState를 호출하면 error가 발생한다.  
  
  tip: 이 속성은 state에 `setState()`를 호출할때 유용하지만 해당 메서드가 언제, 얼마나 자주 호출 되는지는 명확하지 않다. 아마도 stream이 업데이트에 대한 응답으로 호출되는것 같다. `if (mounted) {...` 를 사용하여 `setState()`호출전에 State가 존재하는지 확인 할 수 있디.  
<br/>

* initState()  
  
  위젯이 생성될때 처음으로 호출되는 메서드 이다.(물론 class생성자 다음 입죠~)  
  initState는 오직 한번 만 호출 된다. 또한 반드시 super.initState()를 호출해야 한다.  

  initState에서 실행되면 좋은 것들  
  생성된 위젯 인스턴스의 BuildContext에 의존적인 것들의 데이터 초기화  
  동일 위젯트리내에 부모위젯에 의존하는 속성 초기화  
  Stream 구독, 알림변경, 또는 위젯의 데이터를 변경할 수 있는 다른 객체 핸들링.  

```dart
@override
initState() {
  // 부모의 initState호출
  super.initState();
  // 이 클래스애 리스너 추가
  cartItemStream.listen((data) {
    _updateWidget(data);
  });
}
```
<br/>

* didChangeDependencies()
  
  didChangeDependencies 메서드는 위젯이 최초 생성될때 initState 다음에 바로 호출 된다.  
  또한 위젯이 의존하는 데이터의 객체가 호출될때마다 호출된다. 예를 들면 업데이트되는 위젯을 상속한 경우.  
  공식문서 또한 상속한 위젯이 업데이트 될때 네트워크 호출(또는 다른 비용이 큰 액션)(역자주: API호출)이 필요한 경우 유용하다고 함.  
<br/>

* build()  

  이 메서드는 자주 호출된다(fps + render로 생각하세요.). 필수이며 재정의 대상(@override)이고 반드시 Widget을 리턴해야 한다.  

  플러터의 모든 gui는 Padding, Center 조차도 child 또는 children을 가진 위젯 이라는것을 기억하라.  
<br/>

* didUpdateWidget(Widget oldWidget)

  didUpdateWidget()는 부모 위젯이 변경되어 이 위젯을 재 구성해야 하는 경우(다은 데이터를 제공 해야하기 때문)  

  이것은 플러터가 오래동안 유지 되는 state를 다시 사용하기 때문이다. 이 경우 initState()에서 처럼 읿부 데이터를 다시 초기화 해야 한다.  

  build() 메서드가 Stream이나 변경 가능한 데이터에 의존적인경우 이전 객체에서 구독을 취소하고 didUpdateWidget()에서 새로운 인스턴스에 다시 구독 해야함.  

  tip: 이 메서드는 기본적으로 위젯의 상태와 관련된 위젯을 재 구성해야 하는 경우 initState()을 대치한다.  

  플러터는 항상 이 메서드 수행 후에 build()메서드 호출 하므로, setState() 이후 모든 추가 호출은 불필요 하다.  

```dart
@override
void didUpdateWidget(Widget oldWidget) {
  if (oldWidget.importantProperty != widget.importantProperty) {
    _init();
  }
}
```
<br/>

* setState()

  setState() 메서드는 플러터 프레임워크 자체적, 또는 개발자로 부터 자주 호출된다.  
  '데이터가 변경되었음’을 프레임워크에 알리는데 사용되며 build context의 위젯을 다시 빌드하게 한다.  
  setState()는 비동기적이 않은 callback을 사용한다.(역자주: callback으로 비동기를 사용할 수 없다는 말임).  
<br/>

* deactivate()

  이 메서드는 거의 사용되지 않는다.  
  deactivate()는 tree에서 State가 제거 될때 호출 된다. 그러나 현재 프레임 변경이 완료되기 전에 다시 삽입 될 수 있다. 이 메서드는 State객체가 tree의 한 지점에서 다른 지점으로 이동 할 수 있기 때문에 기본적으로 존재한다.  
  필요에 따라 자주 호출 할 수 있는 이유는 다시 그리(repainting)는데 소용되는 비용이 저렴하기 때문이다. :-)  

```dart
void updateProfile(String name) {
 setState(() => this.name = name);
}
```
<br/>

* dispose()

  dispost()는 State객체가 영구히 제거 된다.  
<br/>

* mounted is false  
  
  이 상태에서 state 객체는 결코 다시 mount되지 않으며, setState()가 호출되면 에러가 발생한다.  

<br/>
    
### 출처: [https://sothecode.tistory.com/14?category=844543](https://sothecode.tistory.com/14?category=844543) [소더코드의 개발자들 그리고...]