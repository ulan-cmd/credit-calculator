let data = localStorage.getItem('data');
data = JSON.parse(data);

document.getElementById('num1').textContent = `${data.summa} сомов`;
document.getElementById('num2').textContent = `${data.srok} месяцев`;
document.getElementById('num3').textContent = `${data.summaVozvrata} сомов`;

const form_btn = document.getElementById('form_btn');

form_btn.onclick = function(){
	let inp1 = document.getElementById('inp1').value;
	let inp2 = document.getElementById('inp2').value;
	let inp3 = document.getElementById('inp3').value;
	let inp4 = document.getElementById('inp4').value;
	let inp5 = document.getElementById('inp5').value;

    
    if (inp1 == '' || inp2 == '' || inp3 == '' || inp4 == '' || inp5 == '') {
       // console.log('empty');

       // 1.уведомлять пользователя чтоб он заполнил все поля
    }
    else{
    	// console.log('not empty');
        let obj  = {
        	inp1:inp1,
            inp2:inp2,
            inp3:inp3,
            inp4:inp4,
            inp5:inp5
        }

        let json = JSON.stringify(obj);
       
    	// 1.Получив данные, обернем в о объект
    	// 2.Объект преобразуем в JSON
    	// 3.Данные передадим в серверную часть через HTTP запрос
        }
    }



//логический оператор

// && - и , true, если обе операции сравнения возвращают true, иначе false
// || - или, true, если хотябы одна операция возвращает true, иначе false

// let b = 10;
// let c = 5;

// let result = b > 10 || c == 6;

// console.log(result); // true

// true - false = true;
// false - true = true;
// true - true = true;
// false - false = false;


//FETCH
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(response => response.json())
.then(data => console.log(data));
