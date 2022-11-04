console.log("Intentional Syntax Error");

let i = 5;

i = 3;
console.log(i);

export const secondeTimer = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};
