// function AdditionNum(num1, num2) {
//   console.log(num1 + num2);
// }
function AdditionNum(num1, num2) {
  return num1 + num2;
}

const result = AdditionNum(4, 5);
console.log("Result: ", result);

function LoginUserMessage(username = "") {
  if (username === undefined) {
    console.log("Please provide a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(LoginUserMessage("Mangalam"));
console.log(LoginUserMessage());
