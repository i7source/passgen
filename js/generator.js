let arr2 = [1,2,3,4,5,6,7,8,9];
let arr3 = ['a','b','c','d','f','g','r','u','v','s','m','z','q','w']; 
let arr4 = ['A','B','C','D','Q','W','V','G','Z','S','H','M','X']; 
let arr5 = ['@',"#",'$','%',"^",'&','*'];



let i = document.getElementById("param-1").oninput = function() {
    document.getElementById("password-length").innerHTML = this.value;
}

generatePass(); // запуск при старте

document.getElementById('generator').onclick = generatePass;

function generatePass() {
    let result = [];
    //проверка включен ли цифры
    if (document.getElementById("param-2").checked){
        result = result.concat(arr2);
    }
    //проверка включен ли строчые символы
    if (document.getElementById("param-3").checked){
        result = result.concat(arr3);
    }
    //проверка включена ли пропись
    if (document.getElementById("param-4").checked){
        result = result.concat(arr4);
    }
    //проверка включены ли спец символы 
    if (document.getElementById("param-5").checked){
        result = result.concat(arr5);
    }
    //перемешиваем наш массив
    result.sort(compareRandom)
    //console.log(result);
    document.getElementById("out").innerHTML = '';

    for (let k = 0; k < 6; k++) {
        let pass = ''; //будующий пароль
    let passLength = parseInt(document.getElementById("param-1").value); // длина пароля
    
    for (let i = 0; i < passLength; i++) { 
        //цикл по длине пароля
        //выбираю случайное значение из массива result
        pass += result[randomInteger(0, result.length-1)];
    }
    document.getElementById("out").innerHTML += '<p>' + pass + '<\p';
    }
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }