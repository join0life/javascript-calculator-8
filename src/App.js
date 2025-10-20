import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 1. 값 입력 받기
    const input = await Console.readLineAsync("값을 입력해주세요 : ");

    if (input === "") {
      Console.print("결과 : 0");
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

    // 4. 에러 처리
    try {
      const sum = numbers.reduce((acc, cur) => {
        const num = Number(cur);

        if (isNaN(num)) {
          throw new Error("[ERROR] 숫자가 아닙니다");
        }

        if (num < 0) {
          throw new Error("[ERROR] 음수는 사용할 수 없습니다");
        }

        return acc + num;
      }, 0);

      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
