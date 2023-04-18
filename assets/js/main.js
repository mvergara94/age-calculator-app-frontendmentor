const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  let informedDay = form.elements['day'].value;
  let informedMonth = form.elements['month'].value;
  let informedYear = form.elements['year'].value;

  const [dayTime, monthTime, yearTime] = calculateTime(
    informedDay,
    informedMonth,
    informedYear
  );

  const resultedYear = document.querySelector('#years');
  const resultedMonth = document.querySelector('#months');
  const resultedDays = document.querySelector('#days');

  resultedYear.textContent = yearTime;
  resultedMonth.textContent = monthTime;
  resultedDays.textContent = dayTime;
});

function calculateTime(day, month, year) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  const diffTime = today.getTime() - birthDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays - years * 365) / 30);
  const days = diffDays - years * 365 - months * 30;

  return [days, months, years];
}

// // Select all invalid inputs

// const invalidInputs = document.querySelectorAll('.inputs input:invalid');

// // Iterate over the invalid inputs

// invalidInputs.forEach(input => {
//   // Adds red border
//   input.style.border = '1px solid var(--alert-color)';

//   // Select the label  - input
//   const label = document.querySelector(`label[for="${input.id}"]`);

//   // Add text
//   const invalidText = document.createElement('div');
//   invalidText.innerText = 'Não é válido';
//   invalidText.style.color = 'red';
//   invalidText.style.fontSize = '0.5rem';
//   invalidText.style.whiteSpace = 'nowrap';
//   input.parentNode.appendChild(invalidText);

//   // Add red color to label text
//   label.style.color = 'var(--alert-color)';
// });
