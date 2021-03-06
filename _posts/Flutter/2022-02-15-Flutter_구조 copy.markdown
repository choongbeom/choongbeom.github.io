---
layout: post
title: Flutter 프로젝트 구조와 앱 구조
date: 2022-02-15 09:00 +0900
category: Flutter
---

> Flutter 프로젝트 구조와 앱 구조

* ios폴더: iOS빌드시에 필요한 파일들과 코드들이 생성됩니다.
  * iOS 장치에 대한 설정 및 권한 처리는 해당 폴더내에서 처리할 수 있습니다.

* android폴더: Android 빌드시에 필요한 파일들과 코드들이 생성됩니다.
  * Android 장치에 대한 설정 및 권한 처리는 해당 폴더내에서 처리할 수 있습니다.

* lib폴더: 핵심이 되는 폴더이며, Dart 코드로 작성되어 있습니다. 앱 구현은 해당 폴더에서 합니다.

### 플러터 앱 구조

아래는 플러터 프로젝트 생성 시 생성되는 샘플 소스 입니다.

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {...}

class MyHomePage extends StatefulWidget {...}

class _MyHomePageState extends State<MyHomePage> {...}
```

모든 코드는 사실상 상태클래스를 참조받고 있는 "_MyHomePageState"에 작성합니다.

* StatelessWidget 클래스

StatelessWidget클래스는 클래스 이름 그대로 상태가 없는 위젯을 정의하는데 사용됩니다.  
상태를 가지지 않는다는 것은 한 번 그려진 후 다시 그리지 않는 경우이며, 이러한 클래스는 프로퍼티로 변수를 가지지 않습니다.  
상태가 없기 때문에 상수를 가질 수 없습니다.

* Stateful 클래스

상태가 있는 위젯을 정의할 때는 Stateful 클래스를 사용합니다.  
statefulwidget은 위젯의 생명주기동안 값이 변할 수 있는 위젯입니다.  
구현하기 위해서는 반드시 State 인스턴스를 생성하는 StatefulWidget 클래스를 생성해야 합니다.   
StatefulWidget 자체는 값이 변하지 않지만 내부의 State 클래스가 생명주기동안 값이 변합니다.  

setState() 메서드는 전달된 익명 함수를 실행한 후 화면을 다시 그리게 하는 build() 메서드를 다시 실행되는 역할을 합니다.  setState() 메서드는 상속 받고 있는 State 클래스가 제공하는 메서드입니다.

<br/>
    
### 출처: [https://sothecode.tistory.com/13](https://sothecode.tistory.com/13) [소더코드의 개발자들 그리고...]