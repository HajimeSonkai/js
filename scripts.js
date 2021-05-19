// NOTE programa 1
let ap1 = 2;
let bp1 = 2;

console.log(ap1 + "+" + bp1 + "=" + (ap1 + bp1));

console.log(ap1 + "-" + bp1 + "=" + (ap1 - bp1));

console.log(ap1 + "x" + bp1 + "=" + ap1 * bp1);

console.log(ap1 + "/" + bp1 + "=" + ap1 / bp1);

console.log(ap1 + "/" + bp1 + " resta:" + (ap1 % bp1));

console.log("");

// NOTE programa 2
let ap2 = 2
let bp2 = 4

if(ap2 > bp2) {
    console.log("o maior entre " + ap2 + " e " + bp2 + " é: " + ap2);
} else {
    console.log("o maior entre " + ap2 + " e " + bp2 + " é: " + bp2);
}

console.log("");

// NOTE progama 3
let ap3 = 8;
let bp3 = 12;
let cp3 = 6;

if (ap3 > bp3 && ap3 > cp3) {
  console.log("o maior entre " + ap3 + " e " + bp3 + " e " + cp3 + " é: " + ap3);
} else if (bp3 > ap3 && bp3 > cp3) {
  console.log("o maior entre " + ap3 + " e " + bp3 + " e " + cp3 + " é: " + bp3);
} else {
    console.log("o maior entre " + ap3 + " e " + bp3 + " e " + cp3 + " é: " + cp3);
}

console.log("");

// NOTE programa 4 Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let ap4 = -10

if (ap4 >= 1) {
  console.log("o numero " + ap4 + " é positivo");
} else if (ap4 < 0) {
  console.log("o numero " + ap4 + " é negativo");
} else {
  console.log("o numero " + ap4 + " é zero");
}