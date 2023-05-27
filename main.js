dayjs.locale('ja');
document.querySelector('.button1').addEventListener('click', () => {


  console.log(calc());

  const total = document.getElementById('total');
  total.textContent = '返金重量税：' + calc();

});

function calc() {
  const price = document.getElementById('price').value
  const week = document.getElementById('weeks').value
  const startMonth = document.getElementById('startMonth').value
  const endMonth = document.getElementById('endMonth').value
  const dateTo = dayjs(startMonth);
  const dateFrom = dayjs(endMonth);
  console.log(dateFrom.diff(dateTo, 'month'));

  return price / (week * 12) * dateFrom.diff(dateTo, 'month');
}

