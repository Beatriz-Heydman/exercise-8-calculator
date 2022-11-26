const buttonsCalculator = document.querySelectorAll(".keys_container button");
const spanCalcs = document.querySelector(".span_calcs");
const spanResults = document.querySelector(".span_results");

buttonsCalculator.forEach((buttonCalculator) => {
  buttonCalculator.addEventListener("click", () => {
    if (spanCalcs.innerHTML === "0") {
      spanCalcs.innerHTML = "";
    }
    spanCalcs.innerHTML += buttonCalculator.value;
  });
});

function equalsCalcs() {
  const expressionText = spanCalcs.innerHTML;

  if (expressionText.includes("%")) {
    const indexOfPercent = expressionText.indexOf("%");
    const leftSideExpression = expressionText.slice(0, indexOfPercent);
    const rightSideExpression = expressionText.slice(
      indexOfPercent + 1,
      expressionText.length
    );

    const resultDivision =
      (Number(leftSideExpression) / 100) * Number(rightSideExpression);

    spanResults.innerHTML = resultDivision;
  } else {
    spanResults.innerHTML = eval(expressionText.replaceAll(",", "."))
      .toString()
      .replaceAll(".", ",");
  }
}

function clearExpression() {
  spanCalcs.innerHTML = "";
  spanResults.innerHTML = "";
}

function deleteBackSpaceExpression() {
  spanCalcs.innerHTML = spanCalcs.innerHTML.slice(
    0,
    spanCalcs.innerHTML.length - 1
  );
}
