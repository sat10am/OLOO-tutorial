# OLOO 맛보기
---
OLOO 디자인 패턴을 이용한 카운터 앱

## Getting Start
---

별도의 프로젝트 구성은 자유롭게 해주세요! OLOO 만 써보면 됩니당 (webpack, parcel 적용 등)

**sat10am에 초대가 되어있지 않은 분은 말씀해주세요! 초대가 되어야 push 가 가능합니당**

```bash
$ git clone https://github.com/sat10am/OLOO-tutorial.git
$ git checkout -b [각자의 브랜치 이름]
# ...add, ...commit
$ git push -u origin [각자의 브랜치 이름]
```

## Demo
---

**[Demo](http://static.doondoony.com/oloo-counter/index.html)**

## TODO
---

- [x] 각 버튼을 생성할 수 있는 Widget 객체를 생성합니다
- [x] Widget 객체와 링크를 맺어 `+ 버튼`과 `- 버튼`을 생성합니다
- [x] `+ 버튼`, `- 버튼`에 각각의 onClick 이벤트를 추가합니다
- [x] 현재 값을 표현하는 Display 객체를 생성합니다
- [x] 각 버튼을 누르면, Display 의 값이 변화합니다
- [x] `button` 태그의 className은 각각 `plus`, `minus`로 합니다
- [x] 버튼의 아이콘인 `i` 태그의 className은 각각 `plus-ico`, `minus-ico`로 합니다
- [x] counter 값을 표시할 `span` className은 `display`로 합니다.