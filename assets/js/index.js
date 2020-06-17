var sumCredit = document.getElementById("sum_credit");
var output = document.getElementById("summ1");
output.textContent = sumCredit.value;

var srokCredit = document.getElementById("month_credit");
var output2 = document.getElementById("summ2");
output2.textContent = srokCredit.value;

const stavka = 3;

var button_href = document.querySelector('.buttom_range');


platezh(sumCredit.value, stavka, srokCredit.value);

//при изменении суммы получаемого кредита
sumCredit.oninput = function(){
	output.textContent = this.value;
	platezh(this.value, stavka, srokCredit.value);
}

//при изменении срока получаемого кредита
srokCredit.oninput = function(){
	output2.textContent = this.value;
	platezh(sumCredit.value, stavka, this.value);
}

//переход на вторую страничку
button_href.onclick = function(){
  window.location.href = 'form.html';
}


//вычисление сумму возврата
function platezh(summa, stavka, srok){
    stavka = stavka / 100;
    let a = Math.pow(1+stavka, srok);
    let res = summa * stavka * a / (a - 1);
    let result = parseFloat(res.toFixed(0)) * srok;

    document.getElementById("summaVozvrata").textContent = result;

    save(summa,srok,result);
}

//сохраняет данные в  localstorage
function save(summa, srok, summaVozvrata){
  let obj = {
  summa : summa,
  srok : srok,
  summaVozvrata : summaVozvrata
  };
  localStorage.setItem('data', JSON.stringify(obj));
}



//1.https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify