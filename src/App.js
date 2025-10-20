import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 1. 값 입력 받기
    const input = await Console.readLineAsync("값을 입력해주세요: ");

    if (input === "") {
      Console.print("결과: 0");
      return;
    }

    // 2. 커스텀 구분자 처리
    // \n을 줄바꿈 -> 실제 문자로 변환
    const normalizedInput = input.replace(/\\n/g, "\n");

    // 커스텀 구분자 추출
    const regex = /^\/\/(.)\n/;
    const match = normalizedInput.match(regex);

    // 숫자만 담은 배열
    let numbers;

    if (match) {
      const matchInput = normalizedInput.replace(match[0], ""); // match[0]: ex.//;\n
      numbers = matchInput.split(match[1]); // [1,2,3]
    } else {
      // 3. 쉼표와 클론 구분자 처리
      numbers = normalizedInput.split(/[,:]/); // [1,2,3]
    }

    let sum = numbers.reduce((acc, cur) => acc + Number(cur), 0);
    Console.print(`결과: ${sum}`);
  }
}

export default App;
