import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 1. 값 입력 받기
    const input = await Console.readLineAsync("값을 입력해주세요: ");

    // 2. 쉼표와 클론 구분자 제거
    const numbers = input.split(/[,:]/).map(Number);

    // 3. 숫자 더하기
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);

    // 4. 결과 출력
    Console.print(`결과: ${sum}`);
  }
}

export default App;
