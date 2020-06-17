let data = localStorage.getItem('data');
data = JSON.parse(data);

document.getElementById('num1').textContent = `${data.summa} сомов`;
document.getElementById('num2').textContent = `${data.srok} месяцев`;
document.getElementById('num3').textContent = `${data.summaVozvrata} сомов`;