document.addEventListener("DOMContentLoaded", function () {
  const executable_code = document.getElementById("executable_code");
  const execution_button = document.getElementById("execution_button");
  const output = document.getElementById("output");

  execution_button.addEventListener("click", function () {
    try {
      // Сохраняем оригинальный console.log
      const originalConsoleLog = console.log;
      let logOutput = "";

      // Перехватываем вывод в console.log
      console.log = function (...args) {
        logOutput += args.join(" ") + "\n";
      };

      // Выполняем пользовательский код
      eval(executable_code.value);

      // Восстанавливаем console.log
      console.log = originalConsoleLog;

      // Отображаем результат
      if (logOutput) {
        output.textContent = logOutput;
        output.style.color = "black";
      } else {
        output.textContent = logOutput || "Код не введен";
        output.style.color = "#e94600ff";
      }
    } catch (error) {
      output.textContent = "Ошибка: " + error.message;
      output.style.color = "#e94600ff";
    }
  });
});
