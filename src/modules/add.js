const scores = [
  {
    name: 'Rachel',
    result: 100,
  },
  {
    name: 'David',
    result: 70,
  },
  {
    name: 'Jane',
    result: 10,
  },
  {
    name: 'Raymond',
    result: 20,
  },
  {
    name: 'Ahmed',
    result: 80,
  },
  {
    name: 'Patience',
    result: 40,
  },
];

const displayData = () => {
  scores.forEach((score) => {
    const tbody = document.querySelector('tbody');
    const rowHolder = document.createElement('div');
    rowHolder.className = 'rowholder';
    rowHolder.innerHTML += `
         <tr>
         <td>${score.name}:</td>
         <td>${score.result}</td>
         </tr>
      `;
    tbody.appendChild(rowHolder);
  });
};
export default displayData;