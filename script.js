//your JS code here. If required.
// Create heading
const heading = document.createElement('h1');
heading.id = 'heading';
heading.textContent = 'Hello, Welcome to JS';
document.body.appendChild(heading);

// Create first number input
const n1 = document.createElement('input');
n1.type = 'number';
n1.id = 'n1';
n1.placeholder = 'Enter first number';
document.body.appendChild(n1);

// Create second number input
const n2 = document.createElement('input');
n2.type = 'number';
n2.id = 'n2';
n2.placeholder = 'Enter second number';
document.body.appendChild(n2);

// Create Calculate button
const sumBtn = document.createElement('button');
sumBtn.id = 'sum_btn';
sumBtn.textContent = 'Calculate';
document.body.appendChild(sumBtn);

// Create paragraph to display sum
const sumPara = document.createElement('p');
sumPara.innerHTML = 'Sum: <span id="sum"></span>';
document.body.appendChild(sumPara);

// Add click event to button
sumBtn.addEventListener('click', () => {
  const num1 = Number(n1.value);
  const num2 = Number(n2.value);
  const sum = num1 + num2;

  document.getElementById('sum').textContent = sum;
});
