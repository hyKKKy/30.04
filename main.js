// Task 1
// let username, gender, age, email;
// let confirmed = false;

// do
// {
//   username = prompt("Введите имя: ");
//   gender = prompt("Введите пол м/ж: ");
//   age = Number(prompt("Введите возраст: "));
//   email = prompt("Введите e-mail: ");
//   confirmed = confirm(`Имя: ${username}\nПол: ${gender}\nВозраст: ${age}\nEmail: ${email}\nВсе верно?`);
// }
// while(confirmed != true)
//     alert("Спасибо за информацию!");

// Task 2 
// let ticket = prompt("Введите номер билета: ");
// let check = false;
// if(ticket > 100000 && ticket < 1000000)
// {
//     if(+ticket[0] + +ticket[1] + +ticket[2] == +ticket[3] + +ticket[4] + +ticket[5])
//         {
//             check = true
//             alert("Счастливый билет")
//         }
//     else54
//     {
//         alert("Несчастливый билет")
//     }
// }
// else{alert("Неправильный номер")}

//Task 3 
let range;
let secret;
let min = 0; 
let max = 100;

while(true)
{
    range = parseInt((min + max)/2);

    let userChoice = prompt("Я думаю вы загадали число: " + range + "\nВаше число больше, меньше или равно?(>, <, =)");

    if(userChoice == "="){
        alert("Я угадал!");
        break;
    }
    else if(userChoice == ">"){
        min = range + 1;
    }
    else if(userChoice == "<"){
        max = range - 1;
    }
    else{
        alert("Error!")
    }
}