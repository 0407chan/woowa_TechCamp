# day3

- 클래스형 코드를 함수형 코드로 수정했다.
- prototype, set, reduce, ===, let, const 등을 활용하여 코드를 수정하는 수업을 했다.
- [ ] prototype이 아직 이해되지 않지만 공부해봐야겠다.
- [ ] reduce는 처음 보는 개념이었다. sum대신 사용하는 것 같은데 살펴봐야겠다.
- [x] let, const 차이를 알고 있다.
- [x] === vs == 차이를 알고 있다.
- iteration 할때는 foreach를 사용하는 것을 준다. map은 새로운 배열을 반환한다. foreach는 순환만 하고 끝난다. 사용할 수 있따면 forEach사용하는 것을 권장 한다.

### 요구사항

- 두 개의 Classes코드를 제거하고, 함수로만 만든다. 중복코드가 있다면 중복을 제거한다.
- var를 사용하지 않고, let이나 const를 사용. 차이에 대해서 주석으로 짧게 설명을 남긴다.
- 생성자에 default paramter를 0으로 세팅하세요
- '==' 말고 '===' 를 사용해서 값을 비교한다. 그 차이에 대해서 주석으로 1-2줄 남겨보세요.

  - `===` 는 엄격한 동등성을 체크한다. type, value 둘다 확인한다.

  ```javascript
  5 === 5; // true
  5 === "5"; // flase
  ```

  - `==` 는 느슨하게 체크한다. value만 같으면 같다고 보고 비교하기 전 강제 형변환을 해 같은 타입으로 만들고 값만 비교한다.

  ```js
  5 == 5; //true
  5 == "5"; //true
  ```

- 완전수(perfect), 과잉수(Abundant), 부족수(Deficient), 소수(Prime) 목록을 각각 출력
- reduce API를 사용해야 한다.
- template literal을 사용해서 결과를 친절한 설명으로 표현한다.

```
2 : deficient, prime
3 : deficient, prime
4 : deficient,
5 : deficient, prime
6 : perfect,
7 : deficient, prime
8 : deficient,
9 : deficient,
10 : deficient,
```

- 기존의 for - loop 중에, forEach, map, filter, reduce 등을 활용해서 수정할 수 있다면 수정한다.
- 배열로 되어 있는 자료구조를 JavaScript의 Set으로 수정한다.

### 추가미션

- JavaScript Classes 에서 상속을 어떻게 구현하는 것인지, 상속은 어떤 원리인지 알아보고 정리한다
  - 관련 키워드 : extend, prototype
- 코드를 더 리팩토링할 수 있는가? 그런 부분을 찾아서 수정해보자. 리팩토링한 부분에 대해서는 주석으로 설명을 추가한다.
