const inputBox = document.querySelector("#inpt");

let previousVal = "";
let firtThreeChar = "";

inputBox.addEventListener("input", (e) => {
  const val = e.target.value;
  console.log(val);
  console.log(previousVal);
  if (val.length == 3 && previousVal.length < val.length) {
    firtThreeChar = val.substring(0, 3);

    let updatedVal = `+(${firtThreeChar})-`;
    inputBox.value = updatedVal;
  } else if (
    inputBox.value.length === 7 &&
    previousVal.length > inputBox.value.length
  ) {
    inputBox.value = firtThreeChar;
  }
  previousVal = inputBox.value;
});
