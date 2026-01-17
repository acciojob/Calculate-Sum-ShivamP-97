const heading = document.createElement('h1');
heading.id = 'heading';
heading.textContent = 'Hello, Welcome to JS';
document.body.appendChild(heading);

const n1 = document.createElement('input');
n1.type = 'number';
n1.id = 'n1';
n1.placeholder = 'Enter first number';
document.body.appendChild(n1);

const n2 = document.createElement('input');
n2.type = 'number';
n2.id = 'n2';
n2.placeholder = 'Enter second number';
document.body.appendChild(n2);

const sumBtn = document.createElement('button');
sumBtn.id = 'sum_btn';
sumBtn.textContent = 'Calculate';
document.body.appendChild(sumBtn);

const sumPara = document.createElement('p');
sumPara.innerHTML = 'Sum: <span id="Sum"></span>';
document.body.appendChild(sumPara);

sumBtn.addEventListener('click', () => {
  const num1 = Number(n1.value);
  const num2 = Number(n2.value);
  const sum = num1 + num2;

  document.getElementById('Sum').textContent = sum; 
});
