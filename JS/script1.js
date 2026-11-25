// alert("Welcome to Hostel 'c.v. raman' room no.324")
// var, let, const = these are for making variables

// {
//     let name = "Harsh";
//     let city = "delhi";
//     const age=25;
//     const name1 = "harshit";
//     console.log(name1 ,typeof name1);
//     console.log(age , typeof age);
//     let username;
//     console.log(username ,typeof username);
//     let id1 = Symbol("id");
//     let id2 = Symbol("id");
//     console.log(id1 === id2);
//     console.log(10 + 20 + "5" - "5");
// }

// let a = 51;
// if (a%5==0){
//     console.log("divisible by 5")
// }
// else{
//     console.log("ERROR............")
// }

// let b = "h";
// let c = "l";
// if (b=="a" || c=="l"){
//     console.log("True")
// }
// else if (b=="a" && c=="l"){
//     console.log("False")
// }

// let number = 4;
// switch (number){
//     case 1:
//         console.log("one");
//         break
//     case 2:
//         console.log("two");
//         break
//     case 3:
//         console.log("three");
//         break
//     case 4:
//         console.log("four")
//         break
//     default:
//         console.log("Any other number")
//         break
// }

// const num = prompt("Enter your number = ");
// if (num > 90){
//     console.log("Grade A")
// }
// else if (num >= 75){
//     console.log("Grade B")
// }
// else if (num >= 60){
//     console.log("Grade A")
// }
// else{
//     console.log("Fail")
// }
// let op = prompt("Enter operator = ");
// let num1 = Number(prompt("Enter number 1 = "));
// let num2 = Number(prompt("Enter number 2 = "));
// if (op == "+"){
//     console.log(num1 + num2)
// }
// else if (op == "-"){
//     console.log(num1 - num2)
// }
// else if (op == "*"){
//     console.log(num1 * num2)
// }
// else if (op == "/"){
//     console.log(num1 / num2)
// }
// else{
//     console.log("Invalid operator")
// }

// let sum = 0
// for (let i = 1; i <= 5; i++){
//     sum = sum + i
//     console.log(i)
// }
// console.log(sum)
// let even = 0;
// let odd = 0;
// for (let i = 1; i <=50;i++){
//     if (i%2==0){
//         console.log(i, "Even")
//         even = even + i
//     }
//     else{
//         console.log(i, "Odd")
//         odd = odd + i
//     }
// }
// console.log("sum of even = ", even)
// console.log("sum of odd = ", odd)

// {let a = 5;
// let factorial = 1;
// for (let i = 1; a; i++){
//     factorial = factorial * i
// }
// console.log(factorial)}

// function calculator(a , b, operator) {
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//         default:
//             return "Invalid operator";
//     }
// }
// console.log(calculator(10, 5, "+"))

// console.log("Hello World")
// console.log("abc")

const titl = document.getElementById("title");

console.log(titl);