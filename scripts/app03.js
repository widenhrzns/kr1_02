"use strict";

const executed = 1;
const notExecuted = 0;

const page = {
  inputs: {
    a: document.getElementById("A"),
    b: document.getElementById("B"),
    c: document.getElementById("C"),
  },
  inequalities: {
    inequality1: document.querySelector(".inequality_1"),
    inequality2: document.querySelector(".inequality_2"),
  },
  notification: document.querySelector(".notification"),
  results: document.querySelector(".results"),
};

/* utils */
function validateAndGetInputData(elements) {
  let isValid = true;
  const numbers = [];
  for (const element of elements) {
    const elementValue = element.value;
    if (!elementValue) {
      isValid = false;
    }
    numbers.push(Number(elementValue));
  }
  if (!isValid) {
    return false;
  }
  return numbers;
}

function resetForm() {
  const elements = [page.inputs.a, page.inputs.b, page.inputs.c];
  for (const input of elements) {
    input.value = "";
  }
  page.inequalities.inequality1.innerText = "";
  page.inequalities.inequality2.innerText = "";
  page.notification.innerText = "";
}

function resultsOfInequalities(inequality1Checker, inequality2Checker) {
  page.results.value = `${inequality1Checker}${inequality2Checker}`;
}

/* work with form */
function inequalitiesChecker() {
  const elements = [page.inputs.a, page.inputs.b, page.inputs.c];
  const numbers = validateAndGetInputData(elements);
  if (!numbers) {
    return (page.notification.innerText = "Необходимо ввести все числа");
  }
  page.notification.innerText = "";
  let inequality1Checker;
  let inequality2Checker;
  if (numbers[0] < numbers[1] && numbers[1] < numbers[2]) {
    inequality1Checker = executed;
    page.inequalities.inequality1.innerText = "✔️";
  } else {
    inequality1Checker = notExecuted;
    page.inequalities.inequality1.innerText = "❌";
  }
  if (numbers[0] < numbers[1] && numbers[1] > numbers[2]) {
    inequality2Checker = executed;
    page.inequalities.inequality2.innerText = "✔️";
  } else {
    inequality2Checker = notExecuted;
    page.inequalities.inequality2.innerText = "❌";
  }
  resultsOfInequalities(inequality1Checker, inequality2Checker);
}
